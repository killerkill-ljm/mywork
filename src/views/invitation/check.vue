<template>
    <div class="form_item_root">
        <input type="text" 
        v-model="text" 
        class="input"
        placeholder="请输入邀请码"
        @keyup.enter="validate(setting.func)"
        ref="input"
        autofocus="autofocus"/>
        <button  @click="validate(setting.func)" 
        class="button">提交</button>
    </div>
</template>

<script>
import asyncValidator from 'async-validator'
import {mapMutations} from 'vuex'
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
                  if(value==='node'){
                      callback()
                      return
                  }         
                  callback('邀请码错误')         
              }
          }
        }
     }
  },
  data() {
    return {
        text:'',
    }
  },
  methods:{
      ...mapMutations('login',['setInvited']),
      validate(func){
        //   window.console.log('test')
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
                window.alert(err[0].message)
            }else{
                _this.setInvited(true)
                _this.$router.push('/')
            }           
          })
      }
  },
}

</script>

<style scoped>
.form_item_root{
    display:flex;
    align-items:center;
    margin-bottom:10px;
    border-top-left-radius:3px;
    border-bottom-left-radius:3px;
    border-top-right-radius:3px;
    border-bottom-right-radius:3px;
    overflow:hidden;
    width:280px;
}
.label{
    display:flex;
    justify-content:flex-end;
}
.input{
    margin:0 0 0 5px;
    outline:none;
    width:220px;
    height:40px;
    box-sizing:border-box;
    font-size:16px;
    border-right:none;
    border:1px solid lightblue;
    border-right:none;
    padding:0 10px;
    border-top-left-radius:3px;
    border-bottom-left-radius:3px;
}
.button{
    outline:none;
    height:40px;
    width:60px;
    border:none;
    color:white;
    background:#FFC300;
}
</style>