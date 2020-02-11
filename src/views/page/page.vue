<template>
  <div class="page">
      <one />
      <div class="space"></div>
      <two />
      <div class="space"></div>
      <three />
      <div class="space"></div>
      <four />
  </div>
</template>

<script>
import One from '@/components/page/one/one.vue'
import Two from '@/components/page/two/two.vue'
import Three from '@/components/page/three/three.vue'
import Four from '@/components/page/four/main.vue'
export default {
  data() {
    return {

    }
  },
  methods:{
   
  },
  components:{
     One,
     Two,
     Three,
     Four
  },
  mounted(){
    const test=this.$router.options.routes
    //window.console.log(test)
  }
}

</script>
<style scoped>
.space{
    height:70px;
}
</style>