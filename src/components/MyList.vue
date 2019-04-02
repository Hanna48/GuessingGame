<template>
  <div class="cardStyle">
    <b-card class="mb-2">
      <b-row md="4">
        <b-col md="9">
          <button href="#" class="stateBtnStyle btnText">All</button>
          <button href="#" class="stateBtnStyle btnText">Unfinished</button>
          <button href="#" class="stateBtnStyle btnText">Completed</button>
        </b-col>
        <b-col md="3" style="margin: auto">
          <button href="#" class="itemBtnStyle btnText">Add</button>
          <button href="#" class="itemBtnStyle btnText">Edit</button>
          <button href="#" class="itemBtnStyle btnText">Delete</button>
        </b-col>
      </b-row>
      <b-row md="8">
        <input class="inputStyle">
        <input class="inputStyle">
        <input class="inputStyle">
        <input class="inputStyle">
        <input class="inputStyle">
        <input class="inputStyle">
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.btnText {
  font-family: "Noto Sans TC", "Avenir", Helvetica, Arial, sans-serif;
  color: #fff;
}
.inputStyle {
  width: 100%;
  margin-top: 15px;
  border: 0;
  outline: none;
  background: transparent;
  border-bottom: 0.8px solid #dbdbdb;
}
</style>
