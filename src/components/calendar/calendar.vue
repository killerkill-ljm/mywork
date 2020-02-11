<template>
  <section class="wh_container">
    <div class="wh_content_all">
      <div class="wh_top_changge">
        <li class="wh_content_li">{{dateTop}}</li>
      </div>
      <div class="wh_content">
        <div class="wh_content_item" v-for="tag in textTop" :key="tag">
          <div class="wh_top_tag">{{tag}}</div>
        </div>
      </div>
      <div class="wh_content">
        <div
          class="wh_content_item"
          v-for="(item,index) in list"
          @click="clickDay(item,index)"
          :key="index"
          :class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'||new Date(item.date).getDate()<myDate.getDate()},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{pre:item.chooseDay.pre},{latter:item.chooseDay.lat},setClass(item)]"
        >
          <div class="wh_item_date">{{item.isToday ? '今天':item.id}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import timeUtil from "./calendar";
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
import { async } from 'q';

export default {
  data() {
    return {
      myDate: undefined,
      list: [],
      dateTop: ""
    };
  },
  computed:{
    ...mapState('calendar',['index','historyChosePre','historyChoseLat']),
    ...mapGetters('calendar',['getPre','getPreLast','getLatLast'])
  },
  props: {
    specialDate:{
      type:Date,
      default:()=>undefined
    },
    //存储被标记的日期
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    textTop: {
      type: Array,
      default: () => ["一", "二", "三", "四", "五", "六", "日"]
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: {
      type: String,
      default: `0`
    },
    futureDayHide: {
      type: String,
      default: `2554387200`
    }
  },
  created() {
    this.intStart();
    this.myDate =this.specialDate? this.specialDate:new Date();
    const date=new Date()
    function tomorrow(date){
      const year=date.getFullYear()
      const month=date.getMonth()
      const day=date.getDate()
      const dayCount=new Date(year,month+1,0).getDate()
      if(day<dayCount){
        return new Date(year,month,day+1)
      }
      if(month<11){
        return new Date(year,month+1,1)
      }
      return new Date(year+1,0,1)
    }
    const nextDay=tomorrow(date)
    const thisMonth=this.myDate.getMonth()
    const thisYear=this.myDate.getFullYear()
    if(date.getMonth()===thisMonth&&date.getFullYear()===thisYear){
      this.clickDay({
        otherMonth:'nowMonth',
        dayHide:false,
        date:timeUtil.dateFormat(date)
      })
    }
    //window.console.log(nextDay.getMonth())
    if(nextDay.getMonth()===thisMonth&&nextDay.getFullYear()===thisYear){
     // window.console.log('nextDay')
      this.clickDay({
        otherMonth:'nowMonth',
        dayHide:false,
        date:timeUtil.dateFormat(nextDay)
      })
    }
  },
  mounted() {
    this.getList(this.myDate);
  },
  methods: {
    intStart() {
      timeUtil.sundayStart = this.sundayStart;
    },
    getList:async function(date, chooseDay={}, isChosedDay = true) {
      window.console.log('getList')
      const [markDate, markDateMore] = this.forMatArgs();
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = "";
        let k = arr[i];
        k.chooseDay= {};
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
           // window.console.log(c.className)
            markClassName = c.className || "";
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t < this.agoDayHide || t > this.futureDayHide;
        if (k.isToday) {
          //here throw event !!!
          this.$emit("isToday", nowTime);
        }
        let flag = !k.dayHide && k.otherMonth === "nowMonth";
        if (chooseDay.pre && chooseDay.pre === nowTime && flag) {
          //here throw event !!!         
          const lat=this.getLatLast
          //window.console.log('preChange')
        //   k.chooseDay.pre = true;
          this.prePush(nowTime);
          window.console.log(this.getPreLast)
          this.$emit("choseDay", nowTime,{
            pre:nowTime,
            lat
          });
        } else if (
          //重新调用getlist时保存被选中日期
          this.getPreLast=== nowTime &&
          !chooseDay.pre &&
          flag
        ) {
          k.chooseDay.pre = true;
        }
        if(chooseDay.lat&&chooseDay.lat===nowTime){
          const pre= this.getPreLast
          this.$emit("choseDay", nowTime,{
            pre,
            lat:nowTime
          });
          this.latPush(nowTime)
          k.chooseDay.lat=true
        }else if(this.getLatLast === nowTime){
          k.chooseDay.lat=true
        }
      }
      this.list = arr;
    },
    forMatArgs: function() {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map(k => {
        return timeUtil.dateFormat(k);
      });
      markDateMore = markDateMore.map(k => {
        k.date = timeUtil.dateFormat(k.date);
        return k;
      });
      return [markDate, markDateMore];
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },
    clickDay: async function(item, i) {
      // window.console.log(this.index)
      // window.console.log(await this.getPreLast())
      // window.console.log(this.getLatLast)
     // window.console.log('clickDay:'+item.chooseDay.pre)
      if (item.otherMonth !== "nowMonth" || item.dayHide) {
        return
      }
      if(this.index===0){
        this.setIndex(1)
        this.getList(this.myDate, {pre:item.date});     
      }else if(this.index===1){
        let before=await this.getPreLast
        before=new Date(before).getTime()
        const thisDate=new Date(item.date).getTime()
        if(before===thisDate){
          return
        }else if(before>thisDate){
          this.getList(this.myDate,{pre:item.date})
        }else if(before<thisDate){
          this.getList(this.myDate,{lat:item.date})
          this.setIndex(2)
        }
      }else if(this.index===2){
        this.setIndex(1)
        this.clear()
        this.getList(this.myDate, {pre:item.date});        
      }
    },
    ...mapMutations('calendar',['setIndex','prePush','latPush','clear'])
  },
  watch: {
    markDate: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    markDateMore: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    agoDayHide: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    futureDayHide: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    sundayStart: {
      handler(val, oldVal) {
        this.intStart();
        this.getList(this.myDate);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 460px) {
  .wh_item_date:hover {
    cursor: pointer;
  }
}
* {
  margin: 0;
  padding: 0;
}

.wh_container {
  width:410px;
  display:flex;
}

li {
  list-style-type: none;
}
.wh_top_changge {
  display: flex;
}

.wh_top_changge li {
  cursor: pointer;
  display: flex;
  color: black;
  font-size: 18px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
}

.wh_top_changge .wh_content_li {
  cursor: auto;
  flex: 2.5;
}
.wh_content_all {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  background-color: white;
  width: 100%;
  overflow: hidden;
  padding-bottom: 8px;
}

.wh_content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 3% 0 3%;
  width: 100%;
}

.wh_content:first-child .wh_content_item_tag,
.wh_content:first-child .wh_content_item {
  color: #ddd;
  font-size: 16px;
}

.wh_content_item,
.wh_content_item_tag {
  font-size: 15px;
  width: 13.4%;
  text-align: center;
  color:black;
  position: relative;
}
.wh_content_item {
  height: 40px;
}

.wh_top_tag {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_item_date {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_jiantou1 {
  width: 12px;
  height: 12px;
  border-top: 2px solid #bfbfbf;
  border-left: 2px solid #bfbfbf;
  transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
  border-color: #ddd;
}

.wh_jiantou2 {
  width: 12px;
  height: 12px;
  border-top: 2px solid #bfbfbf;
  border-right: 2px solid #bfbfbf;
  transform: rotate(45deg);
}
.wh_isMark {
  background: yellow;
  z-index: 2;
  border-radius: none;
}
.wh_other_dayhide {
  color: #bfbfbf;
  background:transparent !important;
}
.wh_want_dayhide {
  color: #bfbfbf;
}
.wh_isToday {
  background:lightblue;
  border-radius:2px;
}
.pre {
  background: yellow;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.latter {
  background: yellow;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;
}
</style>