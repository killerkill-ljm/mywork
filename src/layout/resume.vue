<template>
  <div class="layout">
    <div class="left" :class="leftShow ? 'show':'hidden'">
      <div v-for="(item,index) of list" :key="index"
      class="tab"
      :class="
        `/layout/${item.path}`===$route.path ? 'active' : ''
      ">
      <router-link :to="'/layout/'+item.path" >{{item.meta.tab}}</router-link>
      </div>
    </div>
    <div class="middle">
      <div class="navBar">
        <span class="controller" @click="toggle">
          <i class="heng"
          v-for="item of 3" :key="item"
          ></i>
        </span>
        <span style="display:block;margin-left:10px;color:white;">ToolBar</span>
        <router-link to="/" class="tofirst">首页</router-link>
      </div>
      <div style="margin:20px; box-shadow:0 0 5px #000">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      leftShow:true
    }
  },
  methods:{
    toggle(){
      this.leftShow=!this.leftShow
    }
  },
  computed:{
    list(){
      const res=this.$route.path
      window.console.log(res)
      return this.$router.options.routes[6].children
    }
  }
}
</script>

<style scoped>
.layout{
  display:flex;
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
  text-rendering: optimizeLegibility;
  font-family: "Roboto", sans-serif;
}

.left{
  height:100%;
  width:300px;
  background:white;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow:0 0 5px #000;
}

.middle{
  flex:1;
  overflow-y: auto;
  overflow-x: hidden;
}

.navBar{
  height:64px;
  display:flex;
  align-items:center;
  background-color: #607d8b;
  position:relative;
}

.controller{
  width:48px;
  height:48px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}

.controller:hover{
  background-color:rgba(0,0,0,0.1);
}

.heng{
  height:2px;
  width:20px;
  background:white;
  margin:2px 0;
}

.hidden{
  display:none;
}

.show{
  display:block;
}

.tab{
  margin:10px;
  padding:10px;
  text-align:center;
  border-radius:5px;
}

/* .active{
  background-color:#b3d4fc;
} */
.active a{
  color: black !important;
}

.tofirst{
  position:absolute;
  right:25px;
  height:64px;
  line-height:64px;
  color:white;
}
</style>
