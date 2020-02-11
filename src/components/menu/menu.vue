<template>
  <div class="index">

      <template v-for="(title,index) of titles" >
        <li class="li" :key="index" @mouseover="over(index)" @mouseout="out(index)">
            <span class="title">{{title}}</span>
            <i class="arrow"></i>
        </li>
      </template>
      
     <div class="panel" :class="show ? 'show':'hidden'" @mouseover="over" @mouseout="out">
        <template v-for="(item,index) of content">
            <h3 class="h3" :key="index">
                <span class="ptit">{{item.title}}</span>
                <div class="more">
                    <span >更多</span>
                    <i class="arrow"></i>
                </div>
            </h3>
            <div style="padding-bottom:20px;">
                <template  v-for="(itm,idx) of item.child">
                    <router-link to="/" :key="idx+content.length" class="item">{{itm}}</router-link>
                </template>
            </div>
        </template>
     </div>
     
  </div>
</template>

<script>
import axios from 'axios'
let timer=undefined
export default {
  data() {
    return {
        titles:[],
        contents:[],
        currentIndex:0,
        show:false
    }
  },
  computed:{
      content(){
          if(this.contents.length)
            return this.contents[this.currentIndex]
          return []
      }
  },
  async created(){
      const res = await axios({
          method:'get',
          url:'/common/jsons/menu.json'
      })
    //   window.console.log(res)
      const list =res.data.menu
      list.forEach((item,index)=>{
          this.titles.push(item.name)
          this.contents.push(item.child)
      })
    //   window.console.log(this.content )
  },
  methods:{
      over(index){
        if(typeof index==='number'){
            this.currentIndex=index
        }
        if(timer)
            clearTimeout(timer)
        this.show=true        
      },
      out(index){
        if(typeof index==='number'){
            timer=setTimeout(()=>{
                this.show=false
            },300)
        }else{
            this.show=false
        }
      }
  }
}

</script>
<style scoped>
.index{
    padding:10px;
    width:250px;
    background:white;
    position:relative;
    border:1px solid #e5e5e5;
    box-sizing:border-box;
}
.li{
    display:flex;
    height:26px;
    justify-content:space-between;
    align-items:center;
}
.li:hover .arrow{
    border-color:black;
}
.li:hover .title{
    color:black;
}
.li:hover{
    background:rgba(250,150,0,0.08);
}
.arrow{
    width:5px;
    height:5px;
    border-top:1px solid #646464;
    border-right:1px solid #646464;
    transform:rotate(45deg);
    display:block;
}
.title{
    font-size:13px;
    color:#646464;
}
.panel{
    box-sizing:border-box;
    height:438px;
    width:450px;
    position:absolute;
    left:250px;
    top:-1px;
    background:white;
    padding:30px;
}
.h3{
    display:flex;
    height:33px;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #e5e5e5;
}
.more{
    font-size:12px;
    color:#646464;
    display:flex;
    align-items:center;
}
.show{
    display:block;
}
.hidden{
    display:none;
}
.item{
    display:inline-block;
    color:#999;
    font-size:12px;
    margin:10px 20px 0 0;
}
.item:hover{
    color:#FE8C00;
}
</style>