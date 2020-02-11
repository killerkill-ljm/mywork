<template>
  <div class="search_body_root">
      <search-top-item />
      <search-center-item 
        v-for="(item,index) of list"
        :setting="item"
        :key="index"
      />
      <div class="bottom">
        <span class="plus">1000+</span>
        <h3 class="match">家酒店符合条件</h3>
      </div>
  </div>
</template>

<script>
import SearchTopItem from './searchTopItem.vue'
import SearchCenterItem from './searchCenterItem.vue'
import axios from 'axios'
export default {
  data() {
    return {
        list:[]
    }
  },
  created(){
    axios({
      method:'get',
      url:'/common/jsons/searchItems.json'
    }).then(res =>{
      this.list=res.data
      //window.console.log(res.data)
    }).catch(err=>{
      window.console.error(err)
    })
  },
  components:{
      SearchTopItem,
      SearchCenterItem
  }
}

</script>

<style scoped>
.search_body_root{
    padding:0 20px;
    background:white;
    border: 1px solid #e5e5e5; 
}
.bottom{
  font-size:16px;
  display:flex;
  align-items:center;
  color:#666;
  height:42px;
}
.plus{
  color:#ff8634;
}
.match{
  font-size:16px;
  font-weight:normal;
}
</style>