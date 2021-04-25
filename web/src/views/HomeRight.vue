<template>
  <div class="homeRight">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input2"
      class="elInput"
      ></el-input
    >
    <el-button class="elButton">登录</el-button>
    {{input2}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      input2:'sad'
    }
  }
}
</script>

<style scoped>
.homeRight {
  width: 85vw;
  height: 100vh;
  background-color: #131417;
}
.elInput{
  float: left;
  width: 73vw;
  margin: 1.5vw;
}
.elButton{
  float: left;
  margin: 1.5vw;
}
</style>
