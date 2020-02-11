<template>
  <div class="now_item_root" :style="{
      width
  }">
      <div class="imgHolder">
          <img :src="setting['src']" class="lowest"/>
          <img :src="setting['src2']" class="pic"/>
          <div class="mask"
            :style="{
                'background-image':backgroundImage
            }">
            <h3 class="title">
                <div class="movie_name">{{setting.movieName}}</div>
                <div class="point" v-if="setting.point">
                    <i style="font-size:18px;">{{integer}}.</i>
                    <i style="font-size:14px;">{{fraction}}</i>    
                </div>
            </h3>
          </div>
      </div>
      <slot></slot>   
  </div>
</template>

<script>
export default {
  props:{
      setting:{
          type:Object,
          default:() =>{
              return {
                  "src":"//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/image/loading_2.e3d934bf.png",
                  "src2":"https://p0.meituan.net/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg@160w_220h_1e_1c",
                  "movieName":"叶问4:完结篇",
                  "point":8.9
              }
          }
      },
      width:{
          type:String,
          default:()=> '160px'
      }
  },
  computed:{
      list(){
          const str=this.setting.point.toString()
          const list=str.split('.')
          return list
      },
      integer(){
          return this.list[0]
      },
      fraction(){
          return this.list[1]
      }
  },
  data() {
    return {
        backgroundImage:'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAMAAACpg44GAAAAbFBMVEUiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK2HsfSAAAAJHRSTlPMxr63q6OahzclHRULBgHCsZOOf3p1cGtmYVxXUk1IQz4wLBAszz8hAAAAhklEQVRo3u3OxY0DAAADsBxDmZn337FTVPIjnsAZ4/zgCOcHhzg/+MBlgPOD/zg/+Ifzg3dcbrj84vzgFZcLLmdcTrgccTngssdlh8sWlw0ua1xWuCxxWeDyg/ODc1xmuHzj/OAXzg9+4vzgFJcPnB98x/nBCS5vOD9YVVVVVVVVVVVVr/IEUdzLcLhtP2AAAAAASUVORK5CYII=)'
    }
  },
}

</script>
<style scoped>
.now_item_root{
    border: 1px solid #efefef;
    width:160px;
    margin-bottom:30px;
}
.now_item_root:hover{
    box-shadow: 0 2px 4px 2px rgba(0,0,0,.04);
}
.imgHolder{
    width:100%;
    height:220px;
    position:relative;
}
.mask{
    position:absolute;
    width:100%;
    height:220px;
    background-repeat:repeat-x;
    background-position:bottom;
    opacity:1;
    z-index:99;
}
.lowest{
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%);
    z-index:0;
}
.pic{
    position:absolute;
    z-index:0;
}
.title{
    position:absolute;
    bottom:7px;
    width:100%;
    height:22px;
    z-index:99;
    color:white;
    font-size:16px;
    display:flex;
    justify-content:space-between;
}
.movie_name{
    margin-left:10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight:normal;
}
.point{
    margin-right:10px;
    color: #ffb400;
}

</style>