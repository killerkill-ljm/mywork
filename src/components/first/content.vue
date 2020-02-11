<template>
  <div class="commonWidth content_root">
    <span class="left" v-if="loginStatus">
      <router-link to="/" class="first">首页</router-link>
      <span>hello,&nbsp;{{sex==='男' ? xing+'先生' : xing + '女士'}}&nbsp;|&nbsp;</span>
      <span @click="exit" style="cursor:pointer;" class="exit">退出</span>
    </span>
    <span class="left" v-else>
      <router-link to="/" class="first">首页</router-link>
      <router-link to="/register">注册</router-link>
      <span>&nbsp;/&nbsp;</span>
      <router-link to="/login">登陆</router-link>
    </span>
    <span style="display:flex;">
      <router-link to="/layout/f" class="page">我的简历</router-link>
    </span>
    <div class="right">
      <l-item />
      <router-link to="/layout/example" class="page">仿美团</router-link>
    </div>
  </div>
</template>

<script>
import LItem from "./item.vue";
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState('login',['loginStatus']),
    ...mapState('register',['xing','sex'])
  },
  components: {
    LItem
  },
  methods:{
    ...mapMutations('login',['setStatus']),
    exit(){
      this.setStatus(false)
    }
  }
};
</script>
<style scoped>
.content_root {
  height: 80px;
  color: white;
  display: flex;
  justify-content: space-between;
  line-height: 80px;
  position:absolute;
  top:0;
  right:0;
  left:0;
  z-index:100;
}
.content_root:hover{
  background:rgba(0,0,0,0.3)
}
.first {
  padding: 0 20px;
}
.right {
  display: flex;
}
.left{
  padding-right:20px;
}
.left:hover{
  background:rgba(0,0,0,0.3);
}
.page{
  padding:0 20px;
  line-height:80px;
}
.page:hover{
  background:rgba(0,0,0,0.3);
}

a{
  color:white;
}

a:hover{
  color:yellow;
}
.exit:hover{
  background:rgba(255,255,255,0.5);
  color:rgba(0,0,0,0.5)
}
</style>