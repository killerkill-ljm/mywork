<template>
  <h-s height="2100px" :color="'#b3d4fc'" :sl="-500">
      <div class="main commonWidth">
          <l-left />
          <l-right />
      </div>
  </h-s>
</template>

<script>
import LLeft from './left.vue'
import LRight from './right.vue'
import HS from '@/components/hs/index.vue'
export default {
  data() {
    return {

    }
  },
  components:{
      LLeft,
      LRight,
      HS
  }
}

</script>
<style scoped>
.main{
    padding-top:62px;
    display:flex;
}
</style>