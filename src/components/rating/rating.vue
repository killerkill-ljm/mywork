<template>
  <ul style="display: flex;margin-left:30px;align-items:center;">
    <li
      class="star"
      :class="'bg'+item"
      :style="{
					width,
					height
				}"
      v-for="(item,index) of list"
      :key="index"
      @mouseover="over(index,$event)"
      @mousemove="over(index,$event)"
      @mouseout="out()"
      @click="tap(index,$event)"
      ref="star"
    ></li>
    <span class="point">{{point}}分</span>
  </ul>
</template>

<script>
const baseUrl='../../assets/imgs/'
export default {
  props: {
    height: {
      type: String,
      default: () => "60px"
    },
    width: {
      type: String,
      default: () => "60px"
    }
  },
  data() {
    return {
      list: new Array(5),
      index: 2
    };
  },
  created(){
      this.out()
  },
  computed: {
    point() {
      const inte = parseInt(this.index);
      const x = this.index - inte;
      let point = 0.5;
      if (x === 0) {
        point = 0;
      } else if (x > 0 && x <= 0.4) {
        point = 0.25;
      } else if (x > 0.4 && x <= 0.65) {
        point = 0.75;
      } else if (x > 0.65 && x <= 1) {
        point = 1;
      }
      return inte + point;
    }
  },
  methods: {
    bg(item) {
      return `url(${baseUrl + item}.png)`;
    },
    over(index, event) {
      const x = event.offsetX / parseInt(this.width);
      for (let i = 0; i < this.list.length; i++) {
        if (i < index) {
          this.list.splice(i, 1, 1);
        } else if (i === index) {
          if (x === 0) {
            this.list.splice(i, 1, 2);
          } else if (x > 0 && x <= 0.4) {
            this.list.splice(i, 1, 3);
          } else if (x > 0.4 && x <= 0.65) {
            this.list.splice(i, 1, 4);
          } else if (x > 0.65 && x <= 1) {
            this.list.splice(i, 1, 1);
          }
        } else {
          this.list.splice(i, 1, 2);
        }
      }
    //   console.log(x);
    },
    out() {
      const index = parseInt(this.index);
      const x = this.index - index;
      for (let i = 0; i < this.list.length; i++) {
        if (i < index) {
          this.list.splice(i, 1, 1);
        } else if (i === index) {
          if (x === 0) {
            this.list.splice(i, 1, 2);
          } else if (x > 0 && x <= 0.4) {
            this.list.splice(i, 1, 3);
          } else if (x > 0.4 && x <= 0.65) {
            this.list.splice(i, 1, 4);
          } else if (x > 0.65 && x <= 1) {
            this.list.splice(i, 1, 1);
          }
        } else {
          this.list.splice(i, 1, 2);
        }
      }
    },
    tap(index, event) {
      const x = event.offsetX / parseInt(this.width);
      this.index = index + x;
    }
  }
};
</script>
<style scoped>
.star {
  background-size: contain;
  background-position: left top;
}
.bg1{
  background-image:url(../../assets/imgs/1.png);
}
.bg2{
  background-image:url(../../assets/imgs/2.png);
}
.bg3{
  background-image:url(../../assets/imgs/3.png);
}
.bg4{
  background-image:url(../../assets/imgs/4.png);
}
.point{
    padding-left:10px;
    color:white;
}
</style>