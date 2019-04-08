<template>
  <div>
    <h5 class="titleStyle">Unfinished thing({{todos.length}})</h5>
    <b-row>
      <b-col v-for="(todo,index) in todos" :key="index" md="3" class="contenctStyle">
        <b-form-checkbox @click="Complete(todo)">{{todo.body}}</b-form-checkbox>
        <button href="#" class="itemBtnStyle btnText" @click="Complete(todo)">Finish</button>
        <button href="#" class="itemBtnStyle btnText" @click="Edit(todo)">Edit</button>
        <button href="#" class="itemBtnStyle btnText" @click="Delete(todo)">Delete</button>
        <br>
      </b-col>
    </b-row>
  </div>
</template>

<script scoped>

export default {
  name: "CurrentTodos",
  methods: {
    Complete(todo) {
      this.$store.dispatch("CompleteTodo", todo);
    },
    Edit(todo) {
      this.$store.dispatch("EditTodo", todo);
    },
    Delete(todo) {
      this.$store.dispatch("DeleteTodo", todo);
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
};
</script>

<style scoped>
.titleStyle {
  margin-top: 30px;
  color: #449b94;
}
.contenctStyle {
  margin-top: 10px;
  font-family: "Microsoft JhengHei";
  color: #515555;
}
.btn-group {
  float: right;
}
.itemBtnStyle {
  height: 30px;
  width: 60px;
  margin-left: 25px;
  margin-right: -15px;
  margin-top: 10px;
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  vertical-align: 0%;
  background-color: #a2cd85;
  border: 0px;
  outline: none;
}
.itemBtnStyle:active {
  box-shadow: 0 1px 3px 1px rgba(51, 51, 51, 0.5);
}
.btnText {
  font-family: "Noto Sans TC", "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
}
</style>