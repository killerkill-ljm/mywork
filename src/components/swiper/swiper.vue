<template>
  <div
    class="container"
    :style="{
            width,
            height
        }"
    @mouseover="over"
    @mouseout="out"
  >
    <ul
      class="ul"
      :style="{
                left:`${-currentIndex*parseInt(width)}px`,
                width:`${list.length*100}%`
            }"
    >
      <li
        class="li"
        :style="{
                    width,
                    height
                }"
        v-for="item of list"
        :key="item"
        :class="`bg${item}`"
      ></li>
    </ul>
    <span class="previous" @click="pre" :class="show ? 'show':'hidden'">
      <i class="pre_icon"></i>
    </span>
    <span class="next" @click="next" :class="show ? 'show':'hidden'">
      <i class="next_icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: () => "500px"
    },
    height: {
      type: String,
      default: () => "300px"
    },
    list: {
      type: Array,
      default: () => [0, 1, 2, 3]
    }
  },
  data() {
    return {
      currentIndex: 0,
      show: false,
      timer: undefined
    };
  },
  methods: {
    next() {
      if (this.currentIndex !== this.list.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    pre() {
      if (this.currentIndex !== 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.list.length - 1;
      }
    },
    over() {
      this.show = true;
      if (this.timer) clearTimeout(this.timer);
     // window.console.log(this.timer);
    },
    out() {
      this.show = false;
      this.timer = setTimeout(this.autoMove, 4000);
    },
    autoMove() {
      this.next();
      this.timer = setTimeout(this.autoMove, 4000);
    }
  },
  mounted() {
    this.timer = setTimeout(this.autoMove, 4000);
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
}
.ul {
  display: flex;
  transition-property: left;
  transition-duration: 1s;
  position: relative;
}
.li{
    background-repeat:no-repeat;
    background-size:cover;
}
.bg0 {
  background-image: url(../../assets/imgs/landscape0.jpg);
}
.bg1 {
  background-image:url(../../assets/imgs/landscape1.jpg);
}
.bg2 {
  background-image:url(../../assets/imgs/landscape2.jpg);
}
.bg3 {
  background-image:url(../../assets/imgs/landscape3.jpg);
}
.previous,
.next {
  width: 40px;
  height: 40px;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.previous {
  left: 5px;
}
.next {
  right: 5px;
}
.pre_icon {
  border-top: 2px solid white;
  border-left: 2px solid white;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg) translateX(1px) translateY(2px);
}
.next_icon {
  border-top: 2px solid white;
  border-right: 2px solid white;
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translateX(-1px) translateY(2px);
}
.show {
  display: flex;
}
.hidden {
  display: none;
}
</style>