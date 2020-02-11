<template>
    <div class="form_item_root">
        <label :style="{
            width:LForm.labelWidth
        }"
        class="label">{{setting.label}}&nbsp;&nbsp;</label>
        <input :type="secret ? 'password':'text'" v-model="text" @blur="validate(setting.func)" class="input"
        :class="err ? 'err':''"/>
        <span v-if="err" class="tip">{{err}}</span>
        <span v-if="pass" class="pass"></span>
    </div>
</template>

<script>
import asyncValidator from 'async-validator'
export default {
  props:{
     setting:{
        type:Object,
        default:()=>{
          return {
              func(rule,value,callback){
                  if(!value){
                      callback('请输入内容')
                      return
                  }
                  this.LForm.validateField('confirmPwd')              
                  callback()
              },
              label:'密码',
              label2:'password'
          }
        }
     },
     secret:{
         type:Boolean,
         default:() => false
     }
  },
  data() {
    return {
        text:'',
        err:'',
        pass:false
    }
  },
  inject:['LForm'],
  created(){
      this.LForm.$emit('addField',this)
  },
  methods:{
      validate(func){
          const _this=this
          const descriptor={
            text:[{
              validator:(rule,value,callback)=>{
                  func.call(_this,rule,value,callback)
              }
            }]
          }
          const validator=new asyncValidator(descriptor)
          const model={}
          model.text=this.text
          validator.validate(model,(err,invalidField)=>{
           // window.console.log(err[0].message,invalidField)
            if(err){
                _this.err=err[0].message
                if(_this.pass)
                    _this.pass=false
            }else{
                _this.pass=true
                if(_this.err)
                    _this.err=''
            }           
          })
          return this
      }
  },
}

</script>
<style scoped>
.form_item_root{
    display:flex;
    align-items:center;
    margin-bottom:10px;
}
.label{
    display:flex;
    justify-content:flex-end;
}
.input{
    margin:0 5px;
    outline:none;
    width:300px;
    height:40px;
    box-sizing:border-box;
    font-size:16px;
    border-right:none;
    border:1px solid lightblue;
    padding:0 10px;
    border-radius:3px;
}
.err{
    outline:1px solid #DC143C;
}
.tip{
    color:#DC143C;
}
.pass{
    background-image:url(../../assets/imgs/tongguo.png);
    background-size:50%;
    background-position:center;
    background-repeat:no-repeat;
    width:40px;
    height:40px;
}
</style>