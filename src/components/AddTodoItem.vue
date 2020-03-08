<template>
    <div class="row align-items-center">
        <div class="col-sm-4">
        </div>
        <div class="col-sm-4">
            <input class="pull-left" type="text" placeholder="Add Item!" v-model="itemDescription"/>
            <button class="btn btn-primary pull-right" @click="addItem">Add Item</button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'AddTodoItem',
  props: [
  ],
  data() {
    return {
      itemDescription: '',
    };
  },
  methods: {
    ...mapMutations('todoStore', ['addTodoItem']),
    ...mapActions('todoStore', ['addItemToTodos']),
    addItem() {
      this.addItemToTodos({ item: this.itemDescription });
      this.itemDescription = '';
    },
  },
};
</script>
<style scoped>

</style>
