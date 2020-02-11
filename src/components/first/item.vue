<template>
  <div class="item_root" @mouseover="toggle" @mouseout="toggle">
      <span >{{title}}</span>
      <div class="bottom" :class="hover ? 'show':'hidden'">
          <router-link v-for="(item,index) of list" :key="index" :to="item.to">{{item.content}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name:'LItem',
  props:{
      title:{
        type:String,
        default:()=> '组件概览'
      },
      list:{
          type:Array,
          default:() => ([
              {
                content:'calendar',
                to:'/layout/calendar'
              },
              {
                  content:'pagination',
                  to:'/layout/paginating'
              },
              {
                  content:'menu',
                  to:'/layout/menu'
              },
              {
                  content:'rating',
                  to:'/layout/rating'
              },
              {
                  content:'swiper',
                  to:'/layout/swiper'
              }
          ])
      }
  },
  data() {
    return {
        hover:false
    }
  },
  methods:{
      toggle(){
          this.hover=!this.hover
      }
  }
}

</script>
<style scoped>
.item_root{
    text-align: center;
    position:relative;
    height:80px;
    box-sizing: border-box;
    width:150px;
}
.item_root:hover{
    border-left:1px solid rgba(0,0,0,0.6);
    border-right:1px solid rgba(0,0,0,0.6);
    background:rgba(0,0,0,0.3);
}
.bottom{
    position:absolute;
    top:100%;
    width:150px;
    box-sizing: border-box;
    word-break: keep-all;
    text-align: center;
    border:1px solid rgba(0,0,0,0.6);
    border-top:none;
    right:-1px;
    flex-direction: column;
}
.show{
    display: flex;
    background:rgba(0,0,0,0.5)
}
a{
  color:white;
}

a:hover{
  color:yellow;
}
</style>