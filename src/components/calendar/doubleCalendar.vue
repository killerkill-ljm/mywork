<template>
  <div style="display:flex">
    <calendar @choseDay="choseDay" :markDate="markListPre" />
    <calendar :specialDate="nextMonth" :markDate="markListLat" @choseDay="choseDay" />
  </div>
</template>

<script>
import Calendar from "./calendar.vue";
import util from './calendar.js'
import {mapMutations} from 'vuex'
const mydate = new Date();
export default {
  data() {
    return {
      markListPre: [],
      markListLat: [],
      preDate: '',
      latDate: ''
    };
  },
  computed: {
    nextMonth() {
      const thisYear = mydate.getFullYear();
      const thisMonth = mydate.getMonth();
      let month, year;
      if (thisMonth === 11) {
        month = 0;
        year = thisYear + 1;
        return new Date(year, month, 1);
      }
      return new Date(thisYear, thisMonth + 1, 1);
    }
  },
  methods: {
    choseDay(data, jud) {
      //window.console.log(jud)
      this.preDate = jud.pre;
      this.latDate = jud.lat;
      this.markListPre = this.getMarkList()[0];
      this.markListLat=this.getMarkList()[1]
      // window.console.log(this.markListPre)
      // window.console.log(this.markListLat)
      //this.setDays(this.markListPre.length+this.markListLat.length+2)
    },
    getMarkList() {
      if (!this.preDate || !this.latDate) return [[],[]];
      const preDate = new Date(this.preDate);
      const year = preDate.getFullYear();
      const month = preDate.getMonth() + 1;
      const today = preDate.getDate();
      const allDays = new Date(year, month, 0).getDate();
      const latDate = new Date(this.latDate);
      const choseYear = latDate.getFullYear();
      const choseMonth = latDate.getMonth() + 1;
      const choseDay = latDate.getDate();
      const list = [];
      const start = today + 1;
      if (month === choseMonth) {      
        for (let i = start; i < choseDay; i++) {
          const result = year + "/" + month + "/" + i;
          list.push(result);
        }
        this.setDays(list.length+2)
        if (month === mydate.getMonth() + 1) {
          return [list, []];
        }
        return [[],list]
      }
      for (let i = start; i <=allDays; i++) {
          const result = year + "/" + month + "/" + i;
          list.push(result);
      }
      const list2=[]
      for(let i=1;i<=choseDay;i++){
        const result = choseYear + "/" + choseMonth + "/" + i;
        list2.push(result);
      }
      this.setDays(list.length+list2.length+2)
      return [list,list2]
    },
    ...mapMutations('calendar',['setDays'])
  },
  components: {
    Calendar
  },
  created(){
    
  }
};
</script>
<style scoped>
</style>