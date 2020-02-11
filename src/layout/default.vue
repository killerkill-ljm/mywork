<template>
  <div class="default_root">
      <div class="mask center"></div>
      <l-header />
      <div class="center">
        <router-view />
      </div>
  </div>
</template>

<script>
import LHeader from '@/components/first/content.vue'
export default {
  data() {
    return {

    }
  },
  components:{
    LHeader
  }
}

</script>
<style scoped>
.default_root{
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    background-image:url(../assets/layout/bg.jpeg);
    background-size:cover;
    background-position:center;
}
.mask{
    opacity: 0.8;
    background-color: #999;
    /* filter:blur(50px); */
}
</style>