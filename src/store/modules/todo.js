/* eslint-disable no-param-reassign */
import axios from 'axios';

const API_LOCATION = 'http://localhost:8081/todo-app';

function getHeaders() {
  return {
    headers: {
      Authorization: localStorage.getItem('todoToken'),
    },
  };
}

export default {
  namespaced: true,
  state: {
    todos: [],
    allTodos: [],
  },
  mutations: {
    updateTodos(state, items) {
      // TODO need to get rid of this extra checked property!!
      items.forEach((element) => {
        if (element.state === 'DONE') {
          element.checked = true;
        } else {
          element.checked = false;
        }
      });
      state.todos = items;
    },
    addTodoItem(state, item) {
      if (item.item === '') return;
      state.todos.push({ id: state.todos.length, state: 'CREATED', ...item });
    },
    itemDeleted(state, itemId) {
      const itemTobeDeleted = state.todos.find((item) => item.id === itemId);
      state.todos.splice(state.todos.indexOf(itemTobeDeleted), 1);
    },
    itemChecked(state, checkedItem) {
      if (checkedItem.checked) {
        state.todos.find((item) => item.id === checkedItem.id).state = 'DONE';
      } else {
        state.todos.find((item) => item.id === checkedItem.id).state = 'CREATED';
      }
    },
    updateAllTodos(state, items) {
      state.allTodos = items;
    },
  },
  actions: {
    getTodos({ commit }) {
      axios.get(`${API_LOCATION}/item/all`)
        .then((result) => commit('updateTodos', result.data))
        .catch(console.error);
    },
    addItemToTodos({ commit }, item) {
      const tempItem = { ...item, state: 'CREATED' };
      return axios.post(`${API_LOCATION}/item`, tempItem)
        .then((result) => commit('addTodoItem', { ...tempItem, id: result.data.id }))
        .catch(console.error);
    },
    checkTodoItem({ commit }, item) {
      return axios.put(`${API_LOCATION}/item`,
        { id: item.id, state: item.state, item: item.item },
        getHeaders())
        .then(() => commit('itemChecked', item))
        .catch(console.error);
    },
    deleteTodoItem({ commit }, id) {
      return axios.delete(`${API_LOCATION}/item/${id}`)
        .then(() => commit('itemDeleted', id))
        .catch(console.error);
    },
    getAllTodos({ commit }) {
      axios.get(`${API_LOCATION}/item/all-items`)
        .then((result) => commit('updateAllTodos', result.data))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
