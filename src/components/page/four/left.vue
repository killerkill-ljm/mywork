<template>
  <div class="left_root">
      <l-title />
      <div class="now_items">
          <now-item v-for="(item,index) of nowItems" :key="index" :setting="item">
              <h3 class="ticket">购票</h3>
          </now-item>
      </div>
      <div class="space"></div>
      <l-title :setting="{
          color: '#2d98f3',
          title:'即将上映（103）部'
      }" />
      <div class="now_items">
          <div v-for="(item,index) of nowItems"  :key="index">
            <now-item  :setting="item">
                <future-bottom />
            </now-item>
            <p class="released">1月20日上映</p>
          </div>
      </div>
      <l-title :setting="{
          color: '#ef4238!important',
          title:'热播电影'
      }" >
        <template v-slot:default>
            <a>爱情</a>
            <a>喜剧</a>
            <a>恐怖</a>
            <a>动画</a>
            <a>动作</a>
        </template>
      </l-title >
      <div class="now_items">
          <div style="margin-right:0px;">
            <now-item :setting="first" :width="'350px'" />
          </div>
          <now-item v-for="(item,index) of newItems" :key="index" :setting="item" />
      </div>
  </div>
</template>

<script>
import NowItem from './nowItem.vue'
import LTitle from './title.vue'
import FutureBottom from './futureBottom.vue'
import axios from 'axios'
export default {
  data() {
    return {
        nowItems:[
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p0.meituan.net/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg@160w_220h_1e_1c",
                "movieName":"叶问4:完结篇",
                "point":9.4
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p0.meituan.net/moviemachine/36eda496688542263d9a0f02ac728327823369.jpg@160w_220h_1e_1c",
                "movieName":"宠爱",
                "point":8.9
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p1.meituan.net/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg@160w_220h_1e_1c",
                "movieName":"误杀",
                "point":9.5
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p0.meituan.net/movie/cb6cccf0a8231196b27f7e25fe5d51192325214.jpg@160w_220h_1e_1c",
                "movieName":"灭绝"
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p1.meituan.net/movie/54c4bfe5bbd82023b77844ed10d4e9ec1948884.jpg@160w_220h_1e_1c",
                "movieName":"鲨海逃生",
                "point":7.4
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p1.meituan.net/moviemachine/979531e95cace9abb4c6b74c6a0fdd486176654.jpg@160w_220h_1e_1c",
                "movieName":"变身特工",
                "point":8.9
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p0.meituan.net/movie/584224ba10e6a450ad8d8ef35e22b8cd369031.jpg@160w_220h_1e_1c",
                "movieName":"动物特工局",
                "point":9.2
            },
            {
                "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                "src2":"https://p0.meituan.net/movie/37e835fdaf68e48dd002b6757374251d6793835.jpg@160w_220h_1e_1c",
                "movieName":"紫罗兰永恒花园 外传：永远与自动手记人偶",
                "point":8.8
            }
        ],
        first:{
            "src2":"https://p1.meituan.net/movie/551ddfa39aec08fcbd976308e7eca94d59535.jpg@350w_220h_1e_1c",
            "movieName":"唐人街探案",
            "point":9.1           
        }
    }
  },
  computed:{
      newItems(){
          if(this.nowItems.length)
            return this.nowItems.slice(2)
          return []
      }
  },
  created(){
      
  },
  components:{
      NowItem,
      LTitle,
      FutureBottom
  }
}
</script>

<style scoped>
.left_root{
    width:750px;
    margin:0 51px 0 18px;
}
.now_items{
    margin-top:23px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
.space{
    height:62px;
}
.ticket{
    height:38px;
    line-height:38px;
    text-align:center;
    font-size:14px;
    color:#ef4238;
    width:160px;
    box-sizing:border-box;
}
.ticket:hover{
    color:white;
    background:#ef4238;
}
.released{
    height:34px;
    width:100%;
    color:#999999;
    line-height:34px;
    text-align:center;
    margin-top:-30px;
    margin-bottom:30px;
}
a{
    margin-left:10px;
    color:black;
}
</style>