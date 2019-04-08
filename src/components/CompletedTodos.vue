<template>
  <div>
    <h5 class="titleStyle">Completed thing({{completed.length}})</h5>
    <b-row>
      <b-col v-for="(todo, index) in completed" :key="index" class="contentStyle">
        {{todo.body}}
        <button href="#" class="itemBtnStyle btnText" @click="Delete(todo)">Delete</button>
      </b-col>
    </b-row>
  </div>
</template>
<script scoped>
export default {
  name: "CompletedTodos",
  methods: {
    Delete(todo) {
      this.$store.dispatch("DeleteTodo", todo);
    }
  },
  computed: {
    completed() {
      return this.$store.getters.completed;
    }
  }
};
</script>

<style scoped>
.titleStyle {
  margin-top: 30px;
  color: #449b94;
}
.contentStyle {
  margin-top: 10px;
  font-family: "Microsoft JhengHei";
  color: #515555;
}
.itemBtnStyle {
  height: 30px;
  width: 60px;
  margin-right: 5px;
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