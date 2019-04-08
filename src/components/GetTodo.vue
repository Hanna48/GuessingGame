<template>
  <!-- <div>
    <b-form-input
      class="inputStyle"
      :value="newTodo"
      @keyup.enter="GetTodo"
      placeholder="input something need to do!"
    ></b-form-input>
    <button href="#" class="itemBtnStyle btnText" @click="AddTodo">Add</button>
  </div>-->
  <div class="input-group mb-3">
    <input
      type="text"
      :value="newTodo"
      class="form-control inputStyle"
      placeholder="something need to do!"
      @keyup.enter="GetTodo"
    >
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary itemBtnStyle btnText"
        type="button"
        @click="AddTodo"
      >Add</button>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "GetTodo",
  methods: {
    GetTodo(e) {
      this.$store.dispatch("GetTodo", e.target.value);
    },
    AddTodo() {
      this.$store.dispatch("AddTodo");
      this.$store.dispatch("ClearTodo");
    },
    Edit(todo) {
      this.$store.dispatch("EditTodo", todo);
    },
    Delete(todo) {
      this.$store.dispatch("DeleteTodo", todo);
    }
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  }
};
</script>

<style scoped>
.inputStyle {
  width: 90%;
  margin-bottom: 5px;
  font-family: "Microsoft JhengHei";
  color: #515555;
}
.itemBtnStyle {
  height: 38px;
  width: 60px;
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  vertical-align: 0%;
  background-color: #a2cd85;
  border: 0px;
  outline: none;
}
.itemBtnStyle:hover {
  background-color: #a2cd85;
}
.itemBtnStyle:active {
  box-shadow: 0 1px 3px 1px rgba(51, 51, 51, 0.5);
}
.btnText {
  font-family: "Noto Sans TC", "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
}
</style>