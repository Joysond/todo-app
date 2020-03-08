/* eslint-disable no-param-reassign */
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    todos: [],
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
  },
  actions: {
    getTodos({ commit }) {
      axios.get('/todo/item/all')
        .then((result) => commit('updateTodos', result.data))
        .catch(console.error);
    },
    addItemToTodos({ commit }, item) {
      const tempItem = { ...item, state: 'CREATED' };
      return axios.post('/todo/item', tempItem)
        .then((result) => commit('addTodoItem', { ...tempItem, id: result.data.id }))
        .catch(console.error);
    },
    checkTodoItem({ commit }, item) {
      return axios.put('/todo/item', { id: item.id, state: item.state, item: item.item })
        .then(() => commit('itemChecked', item))
        .catch(console.error);
    },
    deleteTodoItem({ commit }, id) {
      return axios.delete(`/todo/item/${id}`)
        .then(() => commit('itemDeleted', id))
        .catch(console.error);
    },
  },
};
