<template>
  <div class="item_root">
      <div class="imgHolder">
          <img :src="setting.src" style="width:100%;border-radius:3px;" />
          <div class="like">
              <svg viewBox="0 0 1024 1024" style="color:#434848;width:12px;height:12px;">
                  <path style="fill:currentColor"
                  d="M932.523 153.805c116.736 131.618 112.708 335.053 -12.63 463.053l-316.279 312.115a130.662 130.662 0 0 1 -183.296 0l-317.44 -313.344c-128.068 -130.799 -128.068 -343.108 0 -473.976a297.916 297.916 0 0 1 409.19 -17.476a297.711 297.711 0 0 1 397.654 6.417l11.468 11.128l11.264 12.083zm-99.192 73.864l-8.874 -8.601a174.831 174.831 0 0 0 -234.292 0l-17.408 16.52a94.549 94.549 0 0 1 -128.819 -6.826l-9.967 -9.626a175.036 175.036 0 0 0 -243.234 8.533c-81.374 83.081 -81.374 218.931 -0.751 301.261l316.689 312.525a7.782 7.782 0 0 0 10.582 0.068L832.853 530.159c81.783 -83.558 81.92 -219.341 0.478 -302.49z">
                  </path>
              </svg>
              <i class="number">{{setting.number}}</i>
          </div>
      </div>
      <h3 class="title">{{setting.title}}</h3>
      <p class="tabs">{{setting.content}}</p>
      <div style="margin-top:10px;">
          <i class="price">
              <i class="icon">￥</i>
              <i class="rmb">{{setting.price}}</i>
          </i>
          <span class="icon" style="color: #8a9094; text-decoration:line-through;">￥</span>
          <span class="origin">{{setting.origin}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      setting:{
          type:Object,
          default:()=> ({
              "src":"https://p0.meituan.net/iphoenix/fcde6ca9eb499c66fe0c4c0f4798e6352763717.jpg@732w_412h_80Q_1e_1c",
              "number":12,
              "title":"【有间好厝】中骏世界城/北欧私人影院大床房",
              "content":"整套 · 一居室 · 可住2人 · 中骏世界城",
              "price":168,
              "origin":210
          })
      }
  },
  data() {
    return {

    }
  }
}

</script>
<style scoped>
.item_root{
    width:373px;
    height:340px;
    box-sizing:border-box;
    padding:8px;
    background:white;
    margin:10px 0;
    border-radius:3px;
}
.imgHolder{
    position:relative;
    overflow:hidden;
    border-radius:3px;
}
.like{
    background:white;
    padding:4px 6px;
    display:flex;
    align-items:center;
    position:absolute;
    top:8px;
    right:8px;
    border-radius:3px;
}
.number{
    color: #252626;
    margin-left:2px;
    font-size:12px;
    font-weight:800;
}
.title{
    margin:12px 0;
    font-size:16px;
}
.tabs{
    font-size: 14px;
    color: #8a9094;
}
.icon{
    font-size: 12px;
    color:#ff4d6a;
}
.price .rmb{
    color:#ff4d6a;
    font-size:24px;
    margin-left:-5px;
}
.origin{
    font-size: 12px;
    color: #8a9094;
    margin-left:-2px;
    text-decoration:line-through;
}
</style>