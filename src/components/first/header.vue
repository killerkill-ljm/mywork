<template>
  <div class="header_root" :style="{
      'background-position-x':x+'px',
      'background-position-y':y+'px'
  }"></div>
</template>

<script>
export default {
  name:'LHeader',
  data() {
    return {
        x:0,
        y:30
    }
  },
  created(){
      const _this=this
      function increase(){
          _this.x+=8
         // _this.y=Math.random()*3
          setTimeout(increase,1520)
      }
      increase()
  }
}

</script>
<style scoped>
.header_root{
    height:155px;
    background-image:url(../../assets/first/cloud.png);
    /* background-position-y:5px; */
    transition: background-position 1.5s linear;
    background-size:auto 80%;
    background-repeat: repeat-x;
}
</style>