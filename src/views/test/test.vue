<template>
  <div class="test_root">
      <br v-for="item of 50" :key="item+50"/>
      <h-s  height="410px" >
        <template v-slot:default>
          <food />
        </template>  
      </h-s>
  </div>
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
.test_root{
    
}
</style>