<template>
    <div class="form_item_root">
        <label :style="{
            width:LForm.labelWidth
        }"
        class="label">{{setting.label}}&nbsp;&nbsp;</label>
        <input type="radio" v-model="text" 
        class="input"
        value="男"
        id="male"/>
        <label for="male">男</label>
        <input type="radio"  v-model="text" 
        class="input"
        value="女"
        id="female"/>
        <label for="female">女</label>
        <span v-if="err" style="margin-left:10px">{{err}}</span>
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
                      callback('请选择性别')
                      return
                  }             
                  callback()
              },
              label:'性别',
              label2:'sex'
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
    margin:0 0 0 5px;
}
</style>