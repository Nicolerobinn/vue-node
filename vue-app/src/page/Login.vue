/* eslint-disable */
<template>
  <div>
    <nav-bar/>
    <van-form>
          <van-field
            v-model="phone"
            clearable
            name="phone"
            maxlength="11"
            placeholder="输入手机号(新号码自动注册)"
          />
          <van-field
            v-model="sms"
            center
            clearable
            name="sms"
            placeholder="请输入短信验证码"
            maxlength="4"
          >
            <template #button>
              <van-button round  :disabled="smsDisabled" :color="smsButtonColor" size="small" @click="getSend" type="primary">{{smsText}}</van-button>
            </template>
          </van-field>
          <div style="margin: 16px;">
            <van-button  @click="submit" round block :disabled="disabled" :color="buttonColor" type="info" size="small"  native-type="submit">
              提交
            </van-button>
          </div>
    </van-form>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  import navBar from '@/components/navBarBack.vue'
  import { Urls } from "@/utils/url";
  import { get, post } from "@/utils/http";
  export default {
    name: "Login",
    data() {
      return {
      phone: '',
      sms:'',
      disabled:true,
      buttonColor:'gray',
      smsDisabled:true,
      smsButtonColor:'gray',
      smsText:'获取短信',
      inter : null
      };
    },
    components:{
      navBar
    },
    methods: {
      async submit() {
        let obj = {sms:this.sms,phone:this.phone};
        const query = await post(Urls.login,obj);
        if(query.result == 'Error'){
          Toast(query.msg)
        }else{
          this.$router.push('dashboard')
        }
      },
      async getSend(){
        let obj = {phone:this.phone}
        this.setTime()
        const query = await post(Urls.sms,obj);
        Toast(query.smscode)
      },
      setTime(){
        let that = this
        let time = 5
        this.inter = setInterval(() => {
          if(time == 1){
            if(this.phone.trim().length ==11){
              this.smsButtonColor = '#07c160'
              this.smsDisabled= false
              this.smsText = '获取短信'
            }
            clearInterval(that.inter)
            return
          }
          that.smsText = `获取(${time-=1})`
        }, 3000);
        this.smsButtonColor = 'gray'
        this.smsDisabled=true
      },
      toggle(){
        if(this.phone.trim().length == 11 && this.sms.trim().length ==4){
          this.disabled = false
          this.buttonColor = '#07c160'

        }else{
          this.disabled = true
          this.buttonColor = 'gray'
        }
        if(this.inter){
          return
        }
        if(this.phone.trim().length == 11){
          this.smsDisabled = false
          this.smsButtonColor = '#07c160'

        }else{
          this.smsDisabled = true
          this.smsButtonColor = 'gray'
        }
      }
    },
    watch:{
      sms(sms){
        this.toggle()
      },
      phone(phone){
        this.toggle()
      }
    },
    brforedistory(){
       if(this.inter){
         clearInterval(this.inter)
       }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/login.scss";
</style>