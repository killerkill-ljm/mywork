<template>
  <div class="search_top_item_root">
      <div class="top">
          <h3 class="title">位置</h3>
          <dt class="unlimited"><span>不限</span></dt>
          <dd class="hot extend">热门</dd>
          <dd class="extend">行政区/商圈</dd>
          <dd class="extend">地铁站</dd>
          <dd>高校</dd>
          <dd class="extend">车站/机场</dd>
          <dd class="extend">旅游景点</dd>
          <dd>医院</dd>
      </div>
      <div class="bottom">
        <div class="bottom_items">
          <span class="bottom_item" v-for="(item,index) of list" v-text="item"
          :key="index"></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        '香港中路沿线','台东步行街','浮山后','万达CBD','家佳源佳世客','科技大学','马濠公园','世纪公园','滨海学院','万达广场',
        '胶南海王路'
      ]
    }
  },
}

</script>
<style scoped>
.search_top_item_root{
    padding:20px 0;
    border-bottom: 1px solid #e5e5e5;
}
.top{
    display:flex;
    flex-wrap:wrap;
}
.top>*{
    min-width:70px;
    height:22px;
    font-size:14px;
    display:flex;
    align-items:center;
}
.extend{
  margin-right:30px;
}
dd::after{
    content:'';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #000;
    display:block;
    margin-left:5px;
}
dd,dt{
  color:#666;
}
dd:hover{
  color:#06c1ae;
}
dd:hover::after{
    content:'';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #06c1ae;
    display:block;
    margin-left:5px;
}
.unlimited{
  display:flex;
  justify-content:center;
  position:relative;
  left:-30px;
}
.unlimited span{
  width:48px;
  text-align:center;
}
.unlimited:hover span{
  color:white;
  background-color: #13d1be;
  border-radius:12px;
}
.hot{
  color:#06c1ae;
}
.hot::after{
    content:'';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid #06c1ae;
    display:block;
    margin-left:5px;
}
.bottom{
  margin-left:55px;
  margin-top:2px;
}
.bottom_items{
  height:63px;
  display:flex;
  align-items:center;
  background-color: #f0fffd;
}
.bottom_item{
  padding:1px 10px;
  margin-right:10px;
  font-size:14px;
}
.bottom_item:hover{
  color:white;
  background-color: #13d1be;
  border-radius:12px;
}
</style>