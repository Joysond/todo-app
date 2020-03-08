<template>
    <div>
        <div class="my-check-box">
            <div class="row align-items-center">
                <div class="col-sm-4">
                </div>
                <div class="col-sm-4">
                    <input type="checkbox" :value="val" v-model="checkedItem" @change="onChange"
                        class="pull-left"/>
                    <label :class="isDone()" >{{label}}</label>
                    <span id="removeItem"
                        @click="deleteItem"
                        class="glyphicon glyphicon-remove-circle pull-right">
                    </span>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['value', 'val', 'label', 'state'],
  data() {
    return {
      checkedItem: this.state === 'DONE',
    };
  },
  methods: {
    ...mapMutations('todoStore', ['itemDeleted', 'itemChecked']),
    ...mapActions('todoStore', ['checkTodoItem', 'deleteTodoItem']),
    onChange(e) {
      const changedState = e.srcElement.checked ? 'DONE' : 'CREATED';
      this.checkTodoItem({
        checked: e.srcElement.checked, state: changedState, id: this.val, item: this.label,
      });
    },
    deleteItem() {
      this.deleteTodoItem(this.val);
    },
    isDone() {
      return this.state === 'DONE' ? 'todo-done' : '';
    },
  },
};
</script>

<style scoped>
.my-check-box {
  margin-bottom: 5px;
}
.todo-done {
  text-decoration: line-through;
  color: red;
}
</style>
