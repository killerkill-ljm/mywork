<template>
  <div class="hs" ref="hs"><slot></slot></div>
</template>

<script>
import jq from "jquery";

export default {
  props:{
      height:{
          type:String,
          default:() => ('1000px')
      },
      //越大出现的越早
      sl:{
          type:Number,
          default:() => 0
      },
      color:{
        type:String,
        default:() => 'white'
      }
  },
  data() {
    return {};
  },
  mounted() {
    const hs = this.$refs.hs;
    let cover=window.document.createElement('div')
    cover.style.width='100%'
    cover.style.height=this.height
    cover.style.position='absolute'
    cover.style.backgroundColor=this.color
    cover.style.left="0"
    cover.style.top="0"
    cover.style.zIndex="100"
    // cover.style.transitionProperty="display"
    // cover.style.transitionDuration="0.5s"
    hs.appendChild(cover)
    cover = jq(cover);
    const _this=this
    this.$nextTick(() => {
      const hs_top = hs.offsetTop;
      window.console.log('offsettop: '+hs_top)
      let timer = undefined;
      function roll() {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > hs_top-_this.sl) {         
          cover.fadeOut(500);
        //   window.console.log('show')
        } else {
          cover.fadeIn(500);
        //   window.console.log("hide");
        }
      }
      window.addEventListener("scroll", () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(roll,50);
      });
    });
  }
};
</script>
<style scoped>
.hs{
  position:relative;
}
</style>