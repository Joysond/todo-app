<template>
    <div>
        <p>All the items in the system</p>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in allTodos" :key="todo.id">
                    <td>{{todo.item}}</td>
                    <td>{{todo.state}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import { mapActions } from 'vuex';

export default {
  name: 'ShowAllItems',
  created() {
    this.getAllTodos();
    this.$notify({
      group: 'todo',
      type: 'success',
      title: 'Information',
      text: 'Welcome <b>Admin</b>',
    });
  },
  computed: {
    allTodos() {
      return this.$store.state.todoStore.allTodos;
    },
  },
  methods: {
    ...mapActions('todoStore', ['getAllTodos']),
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 0 auto;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
