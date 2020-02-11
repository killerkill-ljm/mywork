<template>
  <div class="search_header">
      <div class="item" style="margin-left:20px;">
          <span class="span">入住城市</span>
          <span class="normal static">青岛</span>
      </div>
      <div class="item" style="margin:0 6px 0 20px">
          <span class="span">入住</span>
          <span class="normal">{{today.replace(/\//g,'-')}}</span>
          <span class="span">{{weekday(today).replace(/\//g,'-')}}</span>
          <span class="icon"></span>
      </div>
      <span style="font-size:12px;color:#999;">-</span>
      <div class="item" style="margin:0 20px 0 6px">
          <span class="span">离店</span>
          <span class="normal">{{tomorow.replace(/\//g,'-')}}</span>
          <span class="span">{{weekday(tomorow).replace(/\//g,'-')}}</span>
          <span class="icon"></span>
      </div>
      <div class="item">
          <input class="select" type="text"
          placeHolder="(关键词选填)酒店名/位置/品牌"
          placeHolder-class="selectPlaceHolder"
          />
      </div>
      <div class="last">
          <button class="search">搜索</button>
      </div>
  </div>
</template>

<script>
const date=new Date()
const year=date.getFullYear()
const month=date.getMonth()+1
const day=date.getDate()
export default {
  data() {
    return {

    }
  },
  computed:{
      today(){                
          return year+'/'+month+'/'+day
      },
      tomorow(){
          const days=new Date(year,month,0).getDate()
          let tomorowYear=undefined
          let tomorowMonth=undefined
          let tomorowDay=undefined
          if(days===day){
              tomorowDay=1
              if(month===12){
                  tomorowMonth=1
                  tomorowYear=year+1
                  return tomorowYear+'/'+tomorowMonth+'/'+tomorowDay
              }
              tomorowMonth=month+1
              tomorowYear=year
              return tomorowYear+'/'+tomorowMonth+'/'+tomorowDay
          }
          tomorowDay=day+1
          return year+'/'+month+'/'+tomorowDay
      }
  },
  methods:{
      weekday(dt){
         if(dt===this.today)
            return '今天'
         let weekDay=new Date(dt).getDay()
         if(weekDay===0){
             return '星期天'
         }
         if(weekDay===1){
             return '星期一'
         }
         if(weekDay===2){
             return '星期二'
         }
         if(weekDay===3){
             return '星期三'
         }
         if(weekDay===4){
             return '星期四'
         }
         if(weekDay===5){
             return '星期五'
         }
         if(weekDay===6){
             return '星期六'
         }
      }
  }
}

</script>
<style scoped>
.search_header{
    box-sizing:border-box;
    padding:20px 10px;
    background:#ebebeb;
    display:flex;
    align-items:center;
}
.item{
    height:37px;
    line-height:37px;
    padding:0 10px;
    display:flex;
    align-items:center;
    background:white;
    min-width:210px;
    box-sizing:border-box;
}
.span{
    color:#999;
    font-size:12px;
    margin-right:5px;
}
.normal{
    font-size:14px;
    flex:1;
    position:relative;
    top:-5%;
}
.icon{
    width: 12px;
    height: 12px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABGdBTUEAALGPC/xhBQAAAUZJREFUKBV9UD1LA0EQnZkNMSpa5E6vtLGK4F8QVMTGQhs/sFQr/QdC/oitRgRtBJuIh2ChlVwCIlik9U7UFGpIcrvjbu72kCCZ5n3Me7OwAOkwMzqB33Cf78asN/1yP248qw2iV/MXJcMOEZ1JJc8RaAuAN5MQVhjUCSCuIsOGQDhCp+Y/FRiWYq/4GYfvX0O5/JTKq1avEMvRbocbw8XCCH+0nTZCFdzAf0yuATjBzYLlFv96+ngNdSEChGMbGIgM2zkdaArBpwOD6VJKWCHNv8OZ+Qcp8UDGuJvy/VjCXj9nwB/zQjLIFULRNUL/VIVI3+vjRmcFj7zqRClSkTYnhXtdKLXY8LfZuSsTtJMVXmV4GdahqRfroYwuuA4dzdds0KIpcE8QHRJTO1lwmYRQNpQhM6Fb98vMsKxrmC3+IwhK/9DtLxPTjUCy4ImaAAAAAElFTkSuQmCC);
    background-size: 100% 100%;
}
.selectPlaceHolder{
    font-size:14px;
    color:#999;
}
.select{
    border:none;
    outline:none;
    width:210px;
}
.static{
    position:static;
}
.last{
    display:flex;
    flex:1;
    justify-content:flex-end;
    align-items:center;
}
.search{
    font-size:14px;
    color:white;
    height:35px;
    line-height:35px;
    padding:0 29px;
    background-color: #13d1be;
    outline:none;
    border-radius:20px;
    font-weight:700;
    border:none;
    margin-right:20px;
}
.search:hover{
    background:#13c1b0;
}
</style>