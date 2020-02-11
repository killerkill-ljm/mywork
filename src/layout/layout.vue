<template>
  <div>
      <div class="mask"></div>
      <l-header />
      <div class="page_pre">
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
.page_pre{
    width:100%;
    margin-top:120px;
    font-family: Roboto,sans-serif;
}
.mask{
    background:#b3d4fc;
    position:fixed;
    width:100%;
    height:1000%;
    z-index:-1;
    top:0;
    bottom:0;
}
</style>