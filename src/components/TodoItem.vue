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
                    {{checkedItem}}
                </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  created() {
    if (this.state === 2) {
      const itemChecked = { checked: true, state: this.state, id: this.val };
      this.$emit('itemChecked', itemChecked);
    }
  },
  props: ['value', 'val', 'label', 'state'],
  data() {
    return {
      checkedItem: this.state === 2,
    };
  },
  methods: {
    onChange(e) {
      const itemChecked = { checked: e.srcElement.checked, state: this.state, id: this.val };
      this.$emit('itemChecked', itemChecked);
    },
    deleteItem() {
      this.$emit('itemDeleted', this.val);
    },
    isDone() {
      return this.state === 2 ? 'todo-done' : '';
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
