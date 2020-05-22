/* eslint-disable */
<template>
    <van-form @submit="onSubmit">
            <van-field v-model="text" label="联系人" />
            <van-field class="radio" name="radio" label="">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                        <van-radio name="1">先生</van-radio>
                        <van-radio name="2">女士</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-field
            readonly
            clickable
            :value="tel"
            placeholder="请输入手机号"
            label="手机号"
            @touchstart.native.stop="show = true"
            >
                <template v-if="tel!==''" #button>
                    <van-icon @click="clear" name="clear" />
                </template>
            </van-field>
            <van-number-keyboard
            v-model="tel"
            :show="show"
            :maxlength="11"
            @blur="show = false"
            />
            <van-field @click-input="goTo"   right-icon="arrow" v-model="digit"  label="收货地址" />
            <!-- <div class="address" >
                <div class="address-label" ><span>收货地址</span></div>
                <div class="address-input-box" >
                    <div class="address-input" ></div>
                    <div class="address-icon" >
                        <van-icon name="arrow" />
                    </div>
                </div>
            </div> -->
            <van-field
            v-model="number"
            placeholder="例：9号楼302室"
            label="门牌号" />


            <van-field name="radio" label="标签">
            <template #input>
                <van-radio-group v-model="radio" direction="horizontal">
                    <van-radio name="1"/>
                    <van-radio name="2"/>
                    <van-radio name="3"/>
                </van-radio-group>
            </template>
            </van-field>

            <van-radio-group v-model="radio">
                <van-cell-group>
                        <van-cell title="设为默认地址" clickable @click="radio = '1'">
                        <template #right-icon>
                            <van-switch v-model="switchChecked" size="20" />
                        </template>
                        </van-cell>
                </van-cell-group>
            </van-radio-group>
            <div class="submit-button" >
                <van-button round block type="info" native-type="submit">
                    保存并使用
                </van-button>
            </div>
    </van-form>
</template>
<script>
  import { Toast } from 'vant';
  export default {
    name: "addressEdit",
    data() {
      return {
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
      radioAddress:'',
      radio:'',
      show: false,
      switchChecked:false
      };
    },
    methods: {
        goTo(){
          this.$router.push('map')
        },
        clear(){
            this.tel=""
        },
        onSubmit(values) {
        console.log('submit', values);
        },
    },
  };
</script>

<style lang="scss" scoped>
.address{
    position: relative;
    padding: 10px 16px;
    display: -webkit-flex;
    display: flex;
    &::after{
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    }
    .address-input-box{
        .address-icon{
            position: relative;
            overflow: hidden;
            color: #969799;
            text-align: right;
            vertical-align: middle;
            word-wrap: break-word;
        }
    }
    .address-label{
        flex: none;
        box-sizing: border-box;
        width: 90px;
    }
}
.radio{
    padding-left:105px ;
}
.submit-button{
    margin: 16px 16px 0px;
}
</style>