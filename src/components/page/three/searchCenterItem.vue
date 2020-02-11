<template>
  <div class="search_center_item_root">
      <h3 v-text="setting.title"></h3>
      <dt class="unlimited"><span>不限</span></dt>
      <div class="dds">
        <div v-for="(item,index) of setting.list" :key="index">
        <dd   v-if="index<7||flag">
            <input type="checkbox" :id="function(){
                return ++id
            }()"/>
            <label :for="id">{{item}}</label>
        </dd>
        </div>
        <span v-if="setting.list.length>7" class="more" @click="toggle" :class="flag ? 'active':''">{{flag ? '收起':'更多'}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{
     setting:{
      type:Object,
      default:() => {
          return {
              title:'星级',
              list:[
                  '经济型舒适','三星高档','四星豪华','五星',
                  '经济型舒适','三星高档','四星豪华','五星'
              ]
          }
      }
     }
  },
  data() {
    return {
        flag:false,
        id:0
    }
  },
  computed:{
  },
  methods:{
      toggle(){
          this.flag=!this.flag
      }
  }
}

</script>
<style scoped>
.search_center_item_root{
    padding:20px 0;
    display:flex;
    font-size:14px;
    align-items:flex-start;
    border-bottom: 1px solid #e5e5e5;
}
h3{
    font-size:14px;
    width:50px;
    color:black;
}
*{
    color:#333;
}
label{
    font-size:14px;

}
input{
    width:19px;
    height:19px;
    margin-top:1px;
    margin-right:3px;
}
input[type="checkbox"]:checked{
    background:green;
    color:white;
}
dd{
    display:flex;
    align-items:flex-start;
    width:130px;
    margin-bottom:10px;
}
.unlimited{
  display:flex;
  justify-content:center;
  margin-right:20px;
}
.unlimited span{
  width:50px;
  text-align:center;
  color:white;
  background-color: #13d1be;
  border-radius:12px;
}
.dds{
    flex:1;
    display:flex;
    flex-wrap:wrap;
    position:relative;
}
.more{
    position:absolute;
    top:2px;
    right:2px;
    display:flex;
    align-items:center;
}
.more::after{
    content:'';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top:3px solid black;
    display:block;
    margin-left:5px;
}
.active{
    color:#06c1ae;
}
.active::after{
    content:'';
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid #06c1ae;
    display:block;
    margin-left:5px;
}
</style>