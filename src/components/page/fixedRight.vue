<template>
    <div class="commonWidth">1000
      <div class="fixedRight" ref="fr"></div>
    </div>
</template>

<script>
import jq from 'jquery'

//有滚动条情况下的max body width
const MAX_B_W=window.screen.availWidth-10
const MAX_RIGHT=(MAX_B_W-1150)/2
export default {
  data() {
    return {

    }
  },
  computed:{

  },
  methods:{
    bodyWidth(){
		const forpar=window.getComputedStyle(window.document.body).width;
		const initWidth=parseInt(forpar);
		return initWidth;
	}
  },
  mounted(){
      const fr=this.$refs.fr
      this.$nextTick(()=>{
          fr.style.right=this.bodyWidth()+MAX_RIGHT-MAX_B_W+'px'
          jq(window).resize(()=>{
              fr.style.right=this.bodyWidth()+MAX_RIGHT-MAX_B_W+'px'

          })
      })
  }
}

</script>
<style scoped>
.fixedRight{
    height:150px;
    width:100px;
    background:lightblue;
    position:fixed;
}
</style>