<template>
  <div>
    <form-item :setting="name" />
    <form-item :setting="xing" />
    <radio-item />
    <form-item :setting="email" />
    <form-item :secret="true" />
    <form-item :secret="true" :setting="password" />
    <button @click="validate" :style="{
         'margin-left':labelWidth
       }"
       class="button">注册</button>
  </div>
</template>

<script>
import FormItem from "./form-item.vue";
import RadioItem from "./radio-item.vue"
import {mapMutations} from 'vuex'
export default {
  props: {
    labelWidth: {
      type: String,
      default: () => "100px"
    }
  },
  data() {
    const _this = this;
    function name(rule, value, callback) {
      if (!value) {
        callback("请输入用户名");
        return;
      }
      callback()
    }
    function xing(rule,value,callback){
        if(!value){
            callback("请输入姓氏")
            return
        }
        if(value.length>2){
            callback("只限1-2个汉字")
            return
        }
        if(value.length>0&&value.length<3){
            callback()
        }
    }
    function email(rule, value, callback) {
      if (!value) {
        callback("请输入邮箱地址");
        return;
      }
      const regxp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      const flag = regxp.test(value);
      if (!flag) {
        callback("邮箱格式不正确");
        return;
      }
      callback();
    }
    function password(rule, value, callback) {
      if (!value) {
        callback("请再次输入密码");
        return;
      }
      const pwd = this.LForm.getText("password");
      if (!pwd) {
        callback("密码栏为空");
        return;
      }
      if (pwd !== value) {
        callback("两次密码输入不相同");
        return;
      }
      callback();
    }
    return {
      name: {
        func: name,
        label: "姓名",
        label2: "username"
      },
      xing:{
          func:xing,
          label:"姓氏",
          label2:'xing'
      },
      email: {
        func: email,
        label: "邮箱",
        label2: "email"
      },
      password: {
        func: password,
        label: "确认密码",
        label2: "confirmPwd"
      },
      fields: []
    };
  },
  components: {
    FormItem,
    RadioItem
  },
  provide() {
    return {
      LForm: this
    };
  },
  created() {
    this.$on("addField", field => {
      if (field) this.fields.push(field);
    });
  },
  methods: {
    ...mapMutations('register',['setInfo']),
    validate() {
      let flag = true;
      let unpass = [];
      const _this = this;
      const obj = {};
      _this.fields.forEach((item, index) => {
        item.validate(item.setting.func);
        const label = item.setting.label2;
        obj[label] = item.text;
        if (!item.pass) {
          flag = false;
          unpass.push(item.setting.label);
        }
      });
      const { username, password,xing ,sex} = obj;
      if (flag) {
          const info={
              username,
              password,
              xing,
              sex
          }
          this.setInfo(info)
          alert('注册成功')
          this.$router.push('/login')
      } else {
        alert(unpass[0] + "不符合要求");
      }
    },
    getText(label) {
      let pwd = undefined;
      this.fields.forEach((item, index) => {
        if (item.setting.label2 === label) {
          pwd = item.text;
        }
      });
      return pwd;
    },
    validateField(label) {
      let flag = {};
      this.fields.forEach((item, index) => {
        if (item.setting.label2 === label) {
          flag = item.validate(item.setting.func);
        }
      });
      return flag;
    }
  }
};
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
</style>