<template>
  <div class="container">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :val="todo.id" :label="todo.item" :state="todo.state"
        @itemChecked="itemChecked" @itemDeleted="itemDeleted"/>
    </div>
    <AddTodoItem @addTodoItem="addTodoItem"/>
    {{ todos }}
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import AddTodoItem from './AddTodoItem.vue';

export default {
  name: 'Todo',
  components: { TodoItem, AddTodoItem },
  data() {
    return {
      todos: [
        {
          id: 0,
          item: 'Wash clothes',
          state: 0,
        },
        {
          id: 1,
          item: 'Clean room',
          state: 1,
        },
        {
          id: 2,
          item: 'Get groceries',
          state: 2,
        },
        {
          id: 3,
          item: 'Read a book',
          state: 0,
        },
        {
          id: 4,
          item: 'Watch movie',
          state: 0,
        },
      ],
    };
  },
  methods: {
    checkTodo(checkedItem, event) {
      const actionItem = this.todos.find((item) => item.id === checkedItem.id);
      if (event.srcElement.checked) {
        actionItem.state = 2;
      } else {
        actionItem.state = 0;
      }
    },
    itemChecked(checkedItem) {
      if (checkedItem.checked) {
        this.todos.find((item) => item.id === checkedItem.id).state = 2;
      } else {
        this.todos.find((item) => item.id === checkedItem.id).state = 0;
      }
    },
    addTodoItem(item) {
      const newItem = item;
      newItem.id = this.todos.length;
      newItem.state = 0;
      this.todos.push(newItem);
    },
    itemDeleted(itemId) {
      const itemTobeDeleted = this.todos.find((item) => item.id === itemId);
      this.todos.splice(this.todos.indexOf(itemTobeDeleted), 1);
    },
  },
};
</script>
<style scoped>
.todo-done {
  color: red;
  text-decoration-line: line-through;
}
</style>
