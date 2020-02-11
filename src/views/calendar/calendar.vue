<template>
  <div class=" center calendar">
    <div class="controller" ref="ctl" @click="toggle">
      <svg viewBox="0 0 1024 1024" style="width:15px;height:15px;color:#C9C9C9;">
        <path style="fill:currentColor"
          d="M739.584 33.6a48 48 0 0 1 48 48v48h12.416a176 176 0 0 1 176 176v512a176 176 0 0 1 -176 176h-576a176 176 0 0 1 -176 -176v-512a176 176 0 0 1 176 -176h19.584v-48a48 48 0 0 1 41.472 -47.552l6.528 -0.448a48 48 0 0 1 48 48v48h352v-48a48 48 0 0 1 41.472 -47.552zm-496 192H224c-44.16 0 -80 35.84 -80 80v512c0 44.16 35.84 80 80 80h576c44.16 0 80 -35.84 80 -80v-512c0 -44.16 -35.84 -80 -80 -80h-12.416v48a48 48 0 0 1 -41.472 47.616l-6.528 0.384a48 48 0 0 1 -48 -48v-48h-352v48a48 48 0 0 1 -41.472 47.616l-6.528 0.384a48 48 0 0 1 -48 -48v-48zm240 430.4a48 48 0 0 1 0 96h-192a48 48 0 0 1 0 -96zm256 -192a48 48 0 1 1 0 96h-448a48 48 0 1 1 0 -96z">
        </path>
      </svg>
      <span :class="flag ? 'date':''"><span>{{pre ? previous:''}}</span>-<span>{{lat ? latter:''}}</span></span>
      <svg  viewBox="0 0 1024 1024" style="width:12px;height:12px;color:#C9C9C9;" :class="flag ? 'active':''">
        <path style="fill:currentColor"
          d="M1024 512A512 512 0 1 1 0 512a512 512 0 0 1 1024 0zM753.05 407.757a51.2 51.2 0 0 0 -72.5 0L512 576.307L343.45 407.757a51.2 51.2 0 0 0 -72.5 72.397l204.8 204.8a51.2 51.2 0 0 0 72.5 0l204.8 -204.8a51.2 51.2 0 0 0 0 -72.397z"
        >
      </path>
      </svg>
    </div>
    <div ref="panel">
      <double-calendar />
    </div>
    <div class="total">Total Days&nbsp;{{dayCount}}&nbsp;</div>
  </div>
</template>

<script>
import DoubleCalendar from '@/components/calendar/doubleCalendar.vue'
import jq from 'jquery'
import {mapGetters,mapState} from 'vuex'
import util from '@/components/calendar/calendar.js'
export default {
  data() {
    return {
      flag:false
    }
  },
  components:{
    DoubleCalendar
  },
  computed:{
    ...mapState('calendar',['dayCount']),
    ...mapGetters('calendar',{
      pre:'getPreLast',
      lat:'getLatLast'
    }),
    previous(){
      if(this.pre===util.dateFormat(new Date()))
        return '今天'
      return this.pre
    },
    latter(){
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
      if(this.lat===util.dateFormat(nextDay))
        return '明天'
      return this.lat
    }
  },
  mounted(){
    const panel=this.$refs.panel
    const ctl=this.$refs.ctl
    this.$nextTick(()=>{
      jq(panel).hide()
      jq(ctl).click(function(){
        jq(panel).slideToggle()
      })
    })
  },
  methods:{
    toggle(){
      this.flag=!this.flag
    }
  }
}

</script>
<style scoped>
.calendar{
    width:1000px;
    height:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:rgb(201, 201, 201);
}
.controller{
  display:flex;
  width:420px;
  justify-content:space-around;
  height:56px;
  align-items:center;
  border:1px solid #e5e5e5;
  background:white;
}
.controller:hover{
    box-shadow:0 0 5px rgba(0,0,0,0.2);
}
.total{
  color:#e5e5e5;
  margin-top:20px;
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
}
.active{
  color:#159cff !important;
  transition:transform 1s;
  transform:rotate(-180deg);
}
.date span{
  color:#159cff;
}
</style>