<template>
  <div class="register_root">
      <l-register />
  </div>
</template>

<script>
import LRegister from '@/components/register/register.vue'
export default {
  data() {
    return {

    }
  },
  components:{
      LRegister
  }
}

</script>
<style scoped>
.register_root{
  margin:200px 0 0 500px;
}
</style>