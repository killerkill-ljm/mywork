<template>
  <div class="center rating">
     <rating />
  </div>
</template>

<script>
import Rating from '@/components/rating/rating.vue'

export default {
  data() {
    return {

    }
  },
  components:{
     Rating
  }
}

</script>
<style scoped>
.rating{
    width:400px;
    height:300px;
}
</style>