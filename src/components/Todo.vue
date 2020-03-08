<template>
  <div class="container">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :val="todo.id" :label="todo.item" :state="todo.state" />
    </div>
    <AddTodoItem />
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
