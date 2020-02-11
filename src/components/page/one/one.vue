<template>
  <div class="commonWidth one">
      <tabs />
      <div class="houses" v-if="houses.length">
        <item v-for="(item,index) of houses" :key="index" :setting="item"/>
      </div>
  </div>
</template>

<script>
import Tabs from './tabs.vue'
import Item from './item.vue'
import axios from 'axios'

export default {
  data() {
    return {
      houses:[]
    }
  },
  async created(){
    const res=await axios({
      method:'get',
      url:'/common/jsons/houses.json'
    })
    this.houses=res.data
  },
  components:{
     Tabs,
     Item
  }
}

</script>
<style scoped>
.houses{
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
}
</style>