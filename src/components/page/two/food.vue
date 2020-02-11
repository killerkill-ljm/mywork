<template>
  <div class="food commonWidth">
    <div>
        <div class="item" 
        v-for="(item,index) of list" :key="index"
        :class="currentIndex===index ? 'active':''"
        v-on:mouseover="setIndex(index)"
        @mouseout="out">
            <h3>{{item.top}}</h3>
            <div></div>
            <p>{{item.bottom}}</p>
        </div>
    </div>
    <div class="right" :class="'bg'+currentIndex">
    </div>
  </div>
</template>

<script>

export default {
  props:{

  },
  data(){
      return {
          list:[
              {
                  top:'美食 Delicacy',
                  bottom:'大牌优惠'
              },
              {
                  top:'甜点饮品 Desserts&Drinks',
                  bottom:'幸福甜蜜'
              },
              {
                  top:'水果生鲜 Fresh foods',
                  bottom:'新鲜速达'
              },
              {
                  top:'超市便利 Supermarket',
                  bottom:'优惠促销'
              }
          ],
          currentIndex:0,
          timer:undefined
      }
  },
  methods:{
      setIndex(i){
          if(this.timer)
            clearTimeout(this.timer)
          this.currentIndex=i
         // window.console.log(this.currentIndex)
      },
      autoMove(){
          if(this.currentIndex<3){
              this.currentIndex++
          }else{
              this.currentIndex=0
          }
          this.timer=setTimeout(this.autoMove,4000)
      },
      out(){
          this.timer=setTimeout(this.autoMove,4000)
      }
  },
  mounted(){
      this.timer=setTimeout(this.autoMove,4000)
  }
}
</script>

<style scoped>
.food{
    display:flex;
    justify-content:space-around;
}
.item h3{
    transition-property:all;
    transition-duration:0.5s;
    font-size:26px;
    line-height:70px;
    font-weight:normal;
}
.item div{
    width:120px;
    height:3px;
}
.item p{
    line-height:30px;
}
.active h3{
    transform:scale(1.5,1.5) translateX(53px);
    color:#FFBA1E;
}
.active div{
    background-color:#FFBA1E;
}
.active p{
    color:#FFBA1E;
}
.right{
    margin-right:30px;
    flex:0.5;
    background-repeat:no-repeat;
    background-size:100%;
    background-position:center;
}
.bg0{
    background-image:url(../../../assets/imgs/u1.jpg);
}
.bg1{
    background-image:url(../../../assets/imgs/u2.jpg);
}
.bg3{
    background-image:url(../../../assets/imgs/u4.jpg);
}
.bg2{
    background-image:url(../../../assets/imgs/u3.jpg);
}
</style>
