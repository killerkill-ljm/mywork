<template>
  <div >
    <form-item :setting="name" />
    <form-item :secret="true"/>
    <button @click="validate" :style="{
        'margin-left':labelWidth
    }"
    class="button">登陆</button>
    <p class="p">
        还没有账号？
    <router-link to="/register" class="toRegister">
    免费注册</router-link>
    </p>
  </div>
</template>

<script>
import FormItem from './form-item.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  props:{
      labelWidth:{
          type:String,
          default:()=> '100px'
      }
  },
  data() {
    const _this=this
    function name(rule,value,callback){
        if(!value){
            callback('请输入用户名')
            return
        }
        if(value===_this.username){
            callback()
            return 
        }else{
            callback('用户名不存在')
        }
    }
    return {
        name:{
            func:name,
            label:'用户名',
            label2:'username'
        },
        fields:[]
    }
  },
  components:{
      FormItem
  },
  provide(){
      return {
        LForm:this
      }
  },
  computed:{
      ...mapState('register',['username','password'])
  },
  created(){
      this.$on('addField',(field)=>{
          if(field)
            this.fields.push(field)
      })
  },
  methods:{
      ...mapMutations('login',['setStatus']),
      validate(){
        let flag=true
        let unpass=[]
        const _this=this
        const obj={}
        this.fields.forEach((item,index)=>{
           item.validate(item.setting.func)
           const label=item.setting.label2
           obj[label]=item.text
           if(!item.pass){
            flag=false
            unpass.push(item.setting.label)
           }
        })
        const {username,password}=obj
        if(flag){
            if(username===this.username&&password===this.password){
                this.setStatus(true)
                this.$router.push('/')
            }else{
                alert('用户名和密码不匹配')
            }
        }else{
            alert(unpass[0]+'不符合要求')
        }
      }
  }
}
</script>
<style scoped>
.button{
    outline:none;
    height:40px;
    width:302px;
    border:none;
    color:white;
    background:#FFC300;
    border-radius:5px;
    font-size:14px;
    transform:translate(3px);
}
.toRegister{
    color:#FFC300;
}
.p{
    margin-left:105px;
    margin-top:10px;
}
</style>
