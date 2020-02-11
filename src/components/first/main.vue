<template>
  <div class="main_root" ref="main"></div>
</template>

<script>
var w =window.screen.availWidth
var h =window.screen.availHeight
export default {
  name: "LMain",
  data() {
    return {
      h,
      w
    };
  },
  mounted() {
    const main = this.$refs.main;
    function addSnow() {
      const ele = document.createElement("heart");
      ele.style.position = "absolute";
      const wid=Math.random()*10
      const width=20+parseInt(wid)+'px'
      ele.style.width=width
      ele.style.height=width
      let downValue = 0;
      ele.style.left = Math.random() * w + "px";
      main.appendChild(ele);
      function moveDown() {
        if (downValue < 1.5*h) {
          downValue += 1.5*h;
          ele.style.top = downValue + "px";
          setTimeout(moveDown, 19000);
        } else {
          main.removeChild(ele);
          return;
        }
      }
      setTimeout(moveDown, 1000);
    }

    function addTenSnow() {
      for (let i = 0; i < 10; i++) setTimeout(addSnow, 1000 * i);
      setTimeout(addTenSnow, Math.floor(Math.random() * 8000));
    }
    this.$nextTick(function(){
          addTenSnow();
    })
  },
  methods: {}
};
</script>
<style scoped>
.main_root {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  right: 0;
}
</style>