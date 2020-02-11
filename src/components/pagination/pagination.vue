<template>
  <div class="pagination_root">
      <span v-if="currentPage!==1" @click="goto(currentPage-1)"><i class="left"></i></span>
      <span :class="currentPage===1 ? 'active':''" @click="goto(1)">1</span>
      <span class="dot" v-if="currentPage>6" @click="goto(currentPage-5)">...</span>
      <div v-for="item of loop" :key="item">
      <span 
        v-if="function(){
            if(item+1>=currentPage-3&&item+1<=currentPage+3){
                return true
            }
            if(currentPage<7){
                return item+1<7
            }
            if(currentPage>length-5){
                return item+1>length-5
            }
        }()"
        :class="currentPage===item+1 ? 'active':''"
        @click="goto(item+1)"
      >{{item+1}}</span>
      </div>
      <span class="dot" v-if="currentPage<length-5&&length>12" @click="goto(currentPage+5)">...</span>
      <span :class="currentPage===length ? 'active':''" @click="goto(length)">{{length}}</span>
      <span v-if="currentPage!==length" @click="goto(currentPage+1)"><i class="right"></i></span>
  </div>
</template>

<script>
export default {
  props:{
      currentPage:{
          type:Number,
          default:()=> 1
      },
      length:{
          type:Number,
          default:() => 56
      }
  },
  computed:{
      loop(){
          return this.length-2
      }
  },
  data() {
    return {

    }
  },
  methods:{
      goto(page){
          this.$emit('setPage',page)
         // window.console.log(page)
      }
  }
}

</script>
<style scoped>
.pagination_root{
    display:flex;
    align-items:center;
    margin-top:20px;
}
span{
    font-size: 16px;
    display: flex;
    width: 41px;
    height: 41px;
    border: 1px solid #999;
    border-radius: 50%;
    color: #999;
    justify-content:center;
    align-items:center;
    margin-right:20px;
}
span:hover{
    border-color:#13d1be;
    color:#13d1be;
}
span:hover i{
    border-color:#13d1be;
}
.active{
    border-color:#13d1be;
    color:white!important;
    background:#13d1be;
}
.active i{
    border-color:#13d1be;
}
.left{
    border-top:2px solid #999;
    border-left:2px solid #999;
    width:11px;
    height:11px;
    transform:translateX(20%) rotate(-45deg) ;
}
.right{
    border-top:2px solid #999;
    border-right:2px solid #999;
    width:11px;
    height:11px;
    transform:translateX(-20%) rotate(45deg) ;
}
.dot {
    width:43px;
    height:43px;
    box-sizing:border-box;
    padding-bottom:10px;
}
</style>