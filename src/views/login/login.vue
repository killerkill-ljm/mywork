<template>
  <div class="login_root">
      <l-login />
  </div>
</template>

<script>
import LLogin from '@/components/login/login.vue'

export default {
  data() {
    return {

    }
  },
  components:{
      LLogin
  }
}

</script>
<style scoped>
.login_root{
  margin:350px 0 0 550px;
}
</style>