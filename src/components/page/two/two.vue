<template>
  <h-s  height="410px" :color="'#b3d4fc'" :sl="-100">
   <template v-slot:default>
     <food />
   </template>  
  </h-s>
</template>

<script>
import HS from '@/components/hs/index.vue'
import Food from '@/components/page/two/food.vue'
export default {
  data() {
    return {

    }
  },
  components:{
     HS,
     Food
  }
}

</script>
<style scoped>

</style>