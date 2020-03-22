import axios from 'axios';

const API_LOCATION = 'http://localhost:8081/todo-app';

export default {
  namespaced: true,
  mutations: {
    updateLocalStore(state, loginInfo) {
      localStorage.setItem('loginInfo', JSON.stringify({
        username: loginInfo.username,
        email: loginInfo.email,
        roles: loginInfo.roles,
      }));
      localStorage.setItem('todoToken', `${loginInfo.tokenType} ${loginInfo.accessToken}`);
    },
  },
  actions: {
    login(state, login) {
      return axios.post(`${API_LOCATION}/api/auth/signin`, login);
    },
  },
};
