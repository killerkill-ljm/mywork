<template>
  <div class="tabs_root commonWidth">
      <li class="tab" v-for="(item,index) of list" :key="index"
      @mouseover="setCurrentIndex(index)" 
      :class="[{active:currentIndex===index}]"
      @mouseout="setCurrentIndex(0)"
      ref="li">
          <h3 class="title">{{item.title}}</h3>
          <p class="chose">{{item.percent}}%选择</p>
      </li> 
      <div class="holder commonWidth" >
            <div class="blank"></div>
            <div class="solid" :style="{
                width:width,
                transform:`translateX(${left}px)`
            }"></div>
      </div>     
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
            {
                title:'中骏世界城',
                percent:17
            },
            {
                title:'浦西万达广场',
                percent:17
            },
            {
                title:'润柏香港城',
                percent:15
            },
            {
                title:'西湖公园周边',
                percent:13
            },
        ],
        currentIndex:0,
        widths:[],
        lefts:[]
    }
  },
  computed:{
      width(){       
          return this.widths[this.currentIndex]
      },
      left(){
          return this.lefts[this.currentIndex]
      }
  },
  created(){
      this.getLis()
  },
  methods:{
      setCurrentIndex(i){
          this.currentIndex=i
      },
      getLis(){
          this.$nextTick(()=>{
              const lis=this.$refs.li
              this.lefts[0]=0
              for(let i in lis){
                  //window.console.log(typeof lis[i].clientWidth)
                  this.widths.push(lis[i].clientWidth-30+'px')
                  this.lefts[parseInt(i)+1]=this.lefts[i]+lis[i].clientWidth
              }
          })
      }
  }
}

</script>
<style scoped>
.tabs_root{
    display:flex;
    flex-wrap:no-wrap;
    background:transparent;
    position:relative;
}
.tab{
    padding:0 15px 12px;
    color:#7d7e80;
}
.title{
    font-size:16px;
}
.chose{
    font-size:12px;
}
.blank{
    height:1px;
    position:absolute;
    bottom:1px;
    left:0;
    transform:scaleY(.5);
    background:rgba(26,43,51,.08);
    width:100%;
}
.solid{
    transition-property:width,transform;
    transition-duration:0.5s;
    height:4px;
    background:#494b50;
    position:absolute;
    bottom:0;
    width:0;
    margin-left:15px;
    border-radius:2px;
}
.holder{
    position:absolute;
    box-sizing:border-box;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
}
.active{
    color:black;
}
</style>