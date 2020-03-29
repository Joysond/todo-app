<template>
  <div class="container">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :val="todo.id" :label="todo.item" :state="todo.state" />
    </div>
    <AddTodoItem />
    <div v-if="isAdmin">
      <router-link :to="{name: 'ShowAllItems'}" exact>Show All Items in the System</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue';
import AddTodoItem from './AddTodoItem.vue';

export default {
  name: 'Todo',
  components: { TodoItem, AddTodoItem },
  created() {
    this.getTodos();
  },
  computed: {
    todos() {
      return this.$store.state.todoStore.todos;
    },
    isAdmin() {
      const { roles } = JSON.parse(localStorage.getItem('loginInfo'));
      let isAdmin = false;
      roles.forEach((role) => {
        if (role === 'ROLE_ADMIN') isAdmin = true;
      });
      return isAdmin;
    },
  },
  methods: {
    ...mapMutations('todoStore', ['itemDeleted', 'checkTodo', 'itemChecked']),
    ...mapActions('todoStore', ['getTodos']),
  },
};
</script>
<style scoped>
.todo-done {
  color: red;
  text-decoration-line: line-through;
}
</style>
