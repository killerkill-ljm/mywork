<template>
   <div class="title" 
   :style="{
         color:setting.color
    }">
        <div style="display:flex;align-items:flex-end;">
          <h3>{{setting.title}}</h3>
          <slot></slot>
        </div>
        <slot name="other">
            <div class="all" v-if="setting.other">
                <span style="font-size:14px;" >{{setting.other ? setting.other:'全部'}}</span>
                <i class="right_point" :style="{
                    'border-color':setting.color
                }"></i>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
  props:{
      setting:{
          type:Object,
          default:()=>{
              return{
                color:'#ef4238',
                title:'正在热映（22）部',
              }
          }
      }
  },
  data() {
    return {

    }
  },
}

</script>
<style scoped>
.title{
    padding-right:10px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
}
.title h3{
    font-size: 26px;
    font-weight: 400;
}
.all{
    display:flex;
    transform:translateY(-2px);
}
.right_point{
    display:block;
    border-right-width:2px;
    border-top-width:2px;
    border-right-style:solid;
    border-top-style:solid;
    transform-origin:0 7px;
    transform:rotate(45deg);
    width:9px;
    height:9px;
}
</style>