<template>
  <div class="home">
    <HomeLeft style="float:left;"/>
    <HomeRight style="float:right;"/>
  </div>
</template>

<script>
import HomeLeft from '@/views/HomeLeft.vue';
import HomeRight from '@/views/HomeRight.vue';
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  components:{
    HomeLeft,
    HomeRight,
  }
}
</script>

