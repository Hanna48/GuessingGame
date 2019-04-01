<template>
  <div>
      <H1 class="titleStyle">MyToDoList</H1>
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue"

export default {
  name: 'app',
  components: {
    MyList,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
