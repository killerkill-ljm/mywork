<template>
  <div class="future_bottom_root">
      <p class="people">{{setting.people}}人想看</p>
      <div class="future">
          <div>预告片</div>
          <div :class="setting.active ? 'active':''">预售</div>
      </div>
     
  </div>
</template>

<script>
export default {
  props:{
      setting:{
          type:Object,
          default:() =>{
              return {
                  people:1358,
                  active:true
              }
          }
      }
  },
  data() {
    return {

    }
  },
}

</script>
<style scoped>
.future_bottom_root{
    width:100%;
}
.people{
    height:34px;
    width:100%;
    text-indent:10px;
    color:#FFB400;
    font-size:14px;
    line-height:34px;
}
.future{
    display:flex;
    height:38px;
}
.future div{
    flex:1;
    line-height:38px;
    text-align:center;
    color:#999999;
    font-size:14px;
}
.active{
    color:#2D98F3 !important;
}
.active:hover{
    color:white!important;
    background:#2D98F3;
}
</style>