<template>
  <h-s height="465px" :color="'#b3d4fc'" :sl="-100">
    <div class="commonWidth search_root">
        <search-header />
        <search-body />
    </div>
  </h-s>
</template>

<script>
import SearchHeader from './searchHeader.vue'
import SearchBody from './searchBody.vue'
import HS from '@/components/hs/index.vue'
export default {
  data() {
    return {

    }
  },
  components:{
      SearchHeader,
      SearchBody,
      HS
  }
}

</script>
