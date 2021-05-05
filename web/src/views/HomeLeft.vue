<template>
  <div class="contentLeft">
    <p id="elText" @mouseover="mouseOver" @mouseleave="mouseLeave">
      SunSystem
    </p>
    <div id="demo"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    mouseOver: function () {
      var active = document.getElementById("demo");
      var active2 = document.getElementById("elText");
      active2.innerHTML = ''
      active.setAttribute(
        "style",
        "width: 20vw;height: 20vh;color: red;text-align: center;line-height: 20vh;background-color: aqua;"
      );
      active.innerHTML = "真不错";
      // active2.style.display = "none";
    },
    mouseLeave() {
      var active2 = document.getElementById("elText")
      var active = document.getElementById("demo");
      active2.innerHTML = 'SunSystem'
      active.style.display = "none";
    },
  },
};
</script>

<style scoped>
.contentLeft {
  width: 15vw;
  height: 100vh;
  background-color: #1e1f26;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#elText {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: white;
  font-size: 30px;
  margin-top: 2vw;
}
/* .demo {
  width: 20vh;
  height: 20vh;
  color: red;
  text-align: center;
  line-height: 20vh;
  background-color: aqua;
} */
</style>