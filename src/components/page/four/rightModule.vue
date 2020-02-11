<template>
  <div class="right_module_root">
      <l-title :setting="{
          color:setting.color,
          title:setting.title,
          other:setting.other ? setting.other :''
      }"/>
      <div class="space"></div>
      <div class="first" :style="{
        'border-width':flag ? '0':'1px'    
      }">
          <div class="imgHolder">
            <img :src="setting.pic" />
            <i class="icon" 
            v-if="setting.icon"
            :style="{
                'background-image':setting.icon
            }"></i>
            <i class="icon2" v-else
            :style="{
                'background-color':setting.color
            }">1</i>
          </div>
          <slot></slot>
      </div>
      <div class="last" v-for="(item,index) of setting.list" :key="index" >
          <i :style="{
              color:index<2 ? setting.color:'#999999'
          }" class="index">{{index+2}}</i>
          <span class="content" :style="{
              'font-size':flag ? '14px':'inherit'
          }">{{item.content}}</span>
          <span class="other" v-if="item.other" :style="{
              color:setting.color
          }">{{item.other}}</span>
      </div>
  </div>
</template>

<script>
import LTitle from './title.vue'
export default {
  props:{
      setting:{
          type:Object,
          default:()=>{
              return {
                  "other":"查看完整榜单",
                  "title":"TOP 100",
                  "color":"#ffb400",
                  "pic":"https://p0.meituan.net/movie/45be438368bb291e501dc523092f0ac8193424.jpg@120w_80h_1e_1c",
                  "icon":"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR0QA/wD/AP+gvaeTAAACXElEQVRIx92UT0tUURiHn/fcewdN0QltQsMMrAbUSiRzUYG4cNM+gz5Bq9rVymjXskV9hDZtK2oREpSQfzBNk5RamJY6DTIjOt6Zufe8LQpSZxw1kqKzPud5H34v5yf6RJR9OGY/oP852KqDVefPgq015Gt6ydf0Yu3uXNydLqgqQUUHbssdAIKRT3iZN4jI3oytGkLroRZQJTD1mHgfTlUTTlUTJt5HYOpBFbX8uEvhkC3GSmhq0GM3Cdc+QGoIjlzFq+v59aCuh1z6BrkvDyHaiUYO4czfxyUNGwYURCGAiV3EqbmOzXxFIgfBbFiacfBOXEMbryDl9QQz9zB2FYyUMgaxPuovgjiYioai+YlXiXiVaHYZXXqKkXCTbdGMRX10fXFXmw+X32JWxykS8VawgObAn9+Zqha79BxjlylGLjQWILsENijJtZkFJPlia7TbgwE0m0DDbGlwcgDjzxSNoaRxKbCGWeziM4xm2I4shX2sBESx0S5wyoEidW1zmNQrXP22F/BPvC3d/2JKf2n3dx/udP5+H/8z4JJ9rIoNQlnx8zqbXjNjANUVtq3Mk0bX0SqR7cUKwKFlPZeXpVVfJpMrjM4lZWhw2k69nDAJgK5TGuuMm+aGWj1XW0V7ZZm2Rjw97BjKN3IkfCzZIJB0JicfU6s6mkgzPDlrxoZnmHs6EkkdjVk78N7fNPx8SxmfE8ZcOpuLdpykobXRtsWq6YhWSvuBiB53Xa2WiQfu7dmEDL6estP979yF7jOhf/eRB6zvMs1ybl3O0z/ulHWfDuouNJt4Y0w7vwMRnPnoHman9AAAAABJRU5ErkJggg==)",
                  "list":[
                      {
                          "content":"肖申克的救赎",
                          "other":"9.5分"
                      },
                      {
                          "content":"这个杀手不太冷",
                          "other":"9.0分"
                      },
                      {
                          "content":"罗马假日",
                          "other":"9.1分"
                      },
                      {
                          "content":"泰坦尼克号",
                          "other":"8.9分"
                      },
                      {
                          "content":"唐伯虎点秋香",
                          "other":"8.8分"
                      },
                      {
                          "content":"乱世佳人",
                          "other":"9.2分"
                      },
                      {
                          "content":"魂断蓝桥",
                          "other":"8.4分"
                      },
                      {
                          "content":"天空之城",
                          "other":"9.6分"
                      }
                  ]
              }
          }
      },
      flag:{
          type:Boolean,
          default:()=> false
      }
  },
  data() {
    return {

    }
  },
  components:{
      LTitle
  }
}

</script>
<style scoped>
.right_module_root{
    margin-bottom:50px;
}
.first{
    display:flex;
    border-style:solid;
    border-color:#e5e5e5;
    margin-bottom:10px;
}
.first:hover{
    background:rgba(0,0,0,.03);
}
.imgHolder{
    position:relative;
    height:80px;
    overflow:hidden;
}
.icon{
    position:absolute;
    left:0;
    top:0;
    background-size:100%;
    background-position:center center;
    width:22px;
    height:25px;
    background-repeat:no-repeat;
}
.icon2{
    position:absolute;
    left:0;
    bottom:-3px;
    width:22px;
    height:25px;
    color:white;
    text-align:center;
}
.content{
    flex:1;
    text-indent:10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.last{
    display:flex;
    height:55px;
    align-items:center;
}
.last:hover{
    background:rgba(0,0,0,.03);
}
.index{
    font-size:18px;
    width:20px;
    text-align:center;
}
.other{
    font-size:14px;
}
.space{
    height:15px;
}
</style>