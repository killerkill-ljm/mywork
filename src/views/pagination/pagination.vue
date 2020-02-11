<template>
  <div class="white center pagination">
      <div class="item" v-if="list.length">
        <l-item :setting="item1"/>
        <l-item :setting="item2" :index="2"/>
        <l-item :setting="item3" :index="3"/>
      </div>
      <l-pagination @setPage="goto" :currentPage="currentPage" v-if="list.length"/>
  </div>
</template>

<script>
import LPagination from '@/components/pagination/pagination.vue'
import LItem from '@/components/pagination/item.vue'
import axios from 'axios'
export default {
  data() {
    return {
      currentPage:1,
      list:[]
    }
  },
  components:{
    LPagination,
    LItem
  },
  methods:{
    goto(page){
      this.currentPage=page
    }
  },
  computed:{
    item1(){
      let index=Math.random()*15
      index=parseInt(index)+this.currentPage%2
      return this.list[index]
    },
    item2(){
      let index=Math.random()*15
      index=parseInt(index)+this.currentPage%2
      return this.list[index]
    },
    item3(){
      let index=Math.random()*15
      index=parseInt(index)+this.currentPage%2
      return this.list[index]
    }
  },
  async created(){
    const res=await axios({
      method:'get',
      url:'/common/jsons/pagItems.json'
    })
    let list=res.data
    list=JSON.stringify(list)
    list=JSON.parse(list)
    this.list=list
    window.console.log(list)
  }
}

</script>
<style scoped>
.pagination{
    width:1000px;
    height:500px;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow:visible;
}
</style>