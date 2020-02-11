<template>
  <div class="content_item_root">
      <div class="imgHolder">
          <img :src="setting.src"/>
      </div>
      <div class="detail">
          <div class="top">
              <em>{{index}}</em>
              <a>{{setting.title}}</a>
              <span v-if="setting.type">{{setting.type}}</span>
          </div>
          <div class="bottom">
              <div class="content">
                  <span>
                      <span>{{setting.content.title}}</span>
                      <a>查看地图</a>
                  </span>
                  <div class="conditions">
                      <div v-for="(item,index) of list" :key="index">
                          <img :src="item.src" />
                          <span>{{item.content}}</span>
                      </div>
                  </div>
                  <div class="last">
                      <span class="din">订</span>
                      <span class="label" v-for="(item,index) of setting.content.labels" :key="index">{{item}}</span>
                  </div>
              </div>
              <div class="point">
                  <span class="number">{{setting.number}}</span>
                  <span> 分 好</span>
              </div>
              <div class="order">
                  <a>微信小程序预定</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      setting:{
          type:Object,
          default:()=>{
              return {
                  src:'https://p0.meituan.net/320.0/tdchotel/__26376495__6671036.jpg',
                  title:'如家酒店(青岛香港中路青岛大学麦岛地铁站店)',
                  type:'经济型',
                  number:4.1,
                  content:{
                      title:'[麦岛] 崂山区麦岛路3-27号（距麦岛地铁站300米）',
                      labels:[
                          '超值套餐','发票推荐'
                      ]
                  }
              }
          }
      },
      index:{
          type:Number,
          default:()=> 1
      }
  },
  data() {
    return {
        list:[
            {
                src:'https://p0.meituan.net/codeman/0e59ed6fea38fea5beaf4e9719950b1f1869.png',
                content:'无线上网'
            },
            {
                src:'https://p0.meituan.net/codeman/82ff6377e80f8e4b548c2806dd2e83781306.png',
                content:'有限上网'
            },
            {
                src:'https://p1.meituan.net/codeman/aec15480c0dae9a1f7ab12aa68737c422029.png',
                content:'有停车厂'
            },
            {
                src:'https://p0.meituan.net/codeman/fedf003253985a42167351341be0a5a01476.png',
                content:'行李寄存'
            }
        ],
    }
  },
}

</script>
<style scoped>
.content_item_root{
    padding:20px 0;
    display:flex;
    height:125px;
    border-bottom:1px solid #e5e5e5;
}
.imgHolder{
    width:200px;
    overflow:hidden;
    border-radius:4px;
    margin-right:20px;
}
.imgHolder img{
    width:100%;
}
.detail{
    flex:1;
    display:flex;
    flex-direction:column;
}
em{
    display:inline-block;
    width:17px;
    height:20px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAABGdBTUEAALGPC/xhBQAAA5xJREFUWAnFWEtPE1EUPmdmWiC+EmmKIglRwIg4daGJRIXSQowuRP+AW3TpI1EWLly4YONj52Nl9AdookYXhqcSNiygKr4QogK1tBFcAX1cz2kZMm1nOm3TqXfRe++555zvu+eeO3OmCAW0xq9jW5dXVk8mROIUAuwGAbWAsDPpQsACjecFwIyE0qttlRWvvzW1/s3XPfmzbu7A0FECvy4EdAEIh7UFa2AUEd4QqZsh1TtqZZOTyI4Pw/tjsXifAHHaylGudQR8rihyb7Cl/aOZnimR6sDgORTioRCi0sy4EDkirgjEnoja8cTITsoU3hBCck3234ZE4nGpSDBG0hf5ZN+MkYmbFRHX5MAdMrqYqVjKOUXnbtjju6T3mUaESJwnEvf1CnaNicwFIvNA879BhEJ2SAgcoyAq2qK9PcYQRWvY4x9nHN1Z4a3ykWBo3jBjplqSSPVk/xk6Eq8mLFfPmIzNeOsRwd5ygWfj4DWWoevT21qxFv1F92sjX7KVbZRQoqDTUaeI1bWzTMhGqNyuKQDMgY4G/bk1y7GKfs6RunJAWWDUSXQouyyU7F9GqKWICLf9SFYIokainF22UrN7HQUs0dGIBbuBLP0jBPnWzFkq2q6AcxLVmMO241gAMAdJAemlhZ7ty4oCL5JPVCoBpqkw3mM7ogEAFdjfqRRooBzhJvWl+v/xm8JOEqlXNz+iSnum3DQYk7EZN0lkHA9H6d17udxEJAmvMPYGER5EPL5nXNSWiwxjhdSOpxreeo6kpvXqlquAXLfa3BBGk1g6mDQiHCZHldxNL0LTLzKdbXFDxEClY1O3diSakzQiLAw2tS9KMnbStfqsKZWspw3SRjvnmo9EMn2aVmZcQsJadIgK3MZMo2LmvDGUsWOxxRc0ss+KiKYU3nd83omSvxTXmkhMg9PpNyPBmKZEeHFe9f5UnOCnnPnB8+IazjpR9vHGctmbHo3eyB141xBPrA6RrLBqjjbgcKA32Oyb1fszGudFhA1dUyN7IRobpJxJ/UNk5C1dNidLFd6Qemw6XWw8y3k0epNwc9sXB0qdxDyklxuN6WEVpG8Vf74k2EfeRFh5QfVOyQ662oBhnhs1JkqE/UzcaN1MlvfR6B24348cjCei/fRn3na9nJI6ooDs++3xBtLkeUwKiojmL3SgbYJ2cILKzCVNRq+GP/Qg7CqGBPsoKiIaeM3EQGsc4B4V4FUIcs+ixzusrRXa/wPm/w5odZfGowAAAABJRU5ErkJggg==);
    background-size:contain;
    background-repeat:no-repeat;
    background-position:left center;
    color:white;
    font-style:normal;
    font-size:12px;
    text-align:center;
    vertical-align:top;
    margin-top:2px;
    transition:background-image .3s ease;
}
.top{
    font-size:12px;
    margin-bottom:5px;
}
.top a{
    font-size:18px;
    color: #06c1ae;
    transition: color .3s ease;
    vertical-align:top;
    padding-left:5px;
}
.top span{
    font-size: 12px;
    color: #999;
    padding-left: 10px;
    vertical-align:bottom;
    line-height:30px;
}
.content_item_root:hover .top em{
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAABGdBTUEAALGPC/xhBQAAA0FJREFUWAnFWE1rE0EYfmZtg148iPhZxVpBEMGDl+Kh0VhED1b/gNe0ioJVqT146MFDD4qC2q+T4A9QUNGDqM2h9OJBCopCTFHbFEWsnsRqx+fd7G6TTWazCcm4sOzM+/U8M/PO5J0o1PDoc1iLJRyFxjG+7VDYQvfNXog8ZfOU5fg+QSueqlv4GTe8imOoz+AA/uAKbbv5tsbxoc0S32dowVU1gqlqPpFEdC/2MMAwR3q8WqBIvcJD6gfVON6Y7IxEdB9OYRkTdFxtcq5R/gsO0moM9yr5lRHRQzSfxzUa91dyaIDsBjPrkhriMIuelqJ2oZnHdTbOl8kbJ+hHnukcGmjJjHA5eslzrHGYEZEc9HGZxn2LgIg+jf0kMc3ELJ8l37qRX8V96KBTjeKVhHWC2H+5JLZICKhgCab3uES4TU+wn/SFFr9JDzuYkUGL4GGoyyJQ+iw30298lnbYwlJfI4E2hwfxyf9IQsaqhIPDpElZGrkZhhwkWdvMFtY0XBpgqzU4ExDLCSGywaS3JtfYKER+WAM0ASksCpG8SW9NrrEgROasAZqB5oRIxqy3pskIkcfW4ExADh65xzp/eLI82Haa7JoqV/jAWrZDZkQO2eGmgkUF97ALRJZxl7a5KPsm6XIsxgS7UAaoCfcOcqFJYOawDi562EE9AgoecIlumr0arCEWa9b7ftTC0vg9jQGSmfa7TfxOcXMMFMcvIeJOUwI9JGO8kRU719me4aW1x18SP0bFqox33U0sbF+S9W7fsCFfGWACB3k5/xqOV5GIGHkl5CSbu8JOdfUV3mEVSYxgoZK/kYgYc2a28fYhZNorOdcgy3ImutRtXmYNTyQR8eHtbwf3upDZbogRLVaY5Ux0cSY+RRlWJSLOOo0OJvAkc6bWau4jD4gkt+lsFAnRlewakzEzPMt7WYr6+LWLcsuLVBwSsYmIobqD9yRzmDPzRfqRj2JCkrg7gEjDFWWspVkxd3NmL3PmBWXri+VBW4gWdsfbQBajUTMRicmyYR/z5Tmb60owFL5RfogzMVMij9GJlSPhOKwfXnPURyhfDHQK3ynrroeExKhrRnxw/qfSyRN4lFHWUJYmwYyvq/X7D9N8sSXnPE2jAAAAAElFTkSuQmCC);

}
.content_item_root:hover .top a{
    color: #f60;
}
.bottom{
    flex:1;
    display:flex;
}
.content{
    display:flex;
    flex-direction:column;
    font-size:12px;
    width:347px;
    border-right:1px solid #e5e5e5;
}
.content>span{
    color:#666;
    flex:1;
}
.content span a{
    color:#13D1BE;
}
.conditions{
    display:flex;
    margin-bottom:5px;
}
.conditions div{
    display:flex;
    align-items:center;
    margin-right:20px;
    flex-wrap:no-wrap;
    color:#999;
    word-break:keep-all;
}
.conditions img{
    width:20px;
}
.din{
    border:1px solid #f5716e;
    color:#f5716e;
    padding:1px;
}
.label{
    border:1px solid #50b6f5;
    padding:1px;
    color:#50b6f5;
    margin-left:5px;
}
.point{
    display:flex;
    font-size:14px;
    align-items:center;
    justify-content:center;
    color:#f90;
    width:150px;
    border-right:1px solid #e5e5e5;
}
.point .number{
    font-size:23px;
}
.order{
    display:flex;
    flex:1;
    font-size:14px;
    align-items:center;
}
.order a{
    color:white;
    font-weight:700;
    background:#f90;
    padding:0 22px;
    border-radius:20px;
    line-height:30px;
    height:30px;
    margin-left:5px;
}
.order a:hover{
 background:#ff9999;
}
</style>