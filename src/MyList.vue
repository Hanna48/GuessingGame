<template>
  <div class="cardStyle">
    <H1 class="titleStyle">MyToDoList</H1>
    <b-card class="mb-2">
      <b-row md="4">
        <b-col md="4">
          <button class="stateBtnStyle btnText" @click="ShowAll">All</button>
          <button class="stateBtnStyle btnText" @click="ShowUnfinish">Unfinished</button>
          <button class="stateBtnStyle btnText" @click="ShowComplete">Completed</button>
        </b-col>
        <b-col md="8">
          <GetTodo></GetTodo>
        </b-col>
      </b-row>
      <b-row md="4">
        <b-col>
          <CurrentTodos v-if="isShowUnfinish"></CurrentTodos>
        </b-col>
      </b-row>
      <b-row md="4">
        <b-col>
          <CompletedTodos v-if="isShowComplete"></CompletedTodos>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import GetTodo from "./components/GetTodo.vue";
import CurrentTodos from "./components/CurrentTodos.vue";
import CompletedTodos from "./components/CompletedTodos.vue";

export default {
  name: "MyList",
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  },
  methods: {
    ShowAll() {
      this.$store.dispatch("ShowAll")
    },
    ShowUnfinish() {
      this.$store.dispatch("ShowUnfinish")
    },
    ShowComplete() {
      this.$store.dispatch("ShowComplete")
    },
  },
  computed: {
    isShowUnfinish() {
      return this.$store.state.isShowUnfinish;
    },
    isShowComplete() {
      return this.$store.state.isShowComplete;
    },
  }
};
</script>

<style scoped>
#app {
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.titleStyle {
  margin-top: 20px;
  color: #449b94;
  text-align: center;
}
.cardStyle {
  max-width: 95%;
  margin-left: 31px;
}
.stateBtnStyle {
  height: 45px;
  width: 100px;
  margin-right: 15px;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  background-color: #3da19f;
  border: 0px;
  outline: none;
}
.stateBtnStyle:hover {
  background-color: #3da19f;
}
.stateBtnStyle:active {
  background-color: #a2cd85;
  box-shadow: 0 1px 5px 1px rgba(51, 51, 51, 0.5);
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
