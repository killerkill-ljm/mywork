<template>
  <div class="center tabs">
      <l-menu />
  </div>
</template>

<script>
import LMenu from '@/components/menu/menu.vue'
export default {
  data() {
    return {

    }
  },
  components:{
    LMenu
  }
}

</script>
<style scoped>
.tabs{
   width:800px;
   height:500px;
}
</style>