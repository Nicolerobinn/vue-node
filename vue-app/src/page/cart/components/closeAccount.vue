/* eslint-disable */
<template>
  <div class="bottom-close" >
    <div  class="close-content">
        <van-checkbox @click="click" v-model="checked" />
        <div  class="close-content-left" >
            <div class="content-top"  >
                 <p>合计<span class="red" >{{20 | moneyFormat}}</span></p>
                 <p><span>满{{1000000|moneyFormat}}可免配送费</span></p>
            </div>
            <van-button type="primary" round   size="small"  url="/vant/mobile.html">
                <span v-show="num>0" >去结算({{num}})</span>
                <span v-show="num==0" >去结算</span>
            </van-button>
        </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import {getLocalStore} from '@/utils/common'
import { moneyFormat } from '@/filter'
export default {
  name: "closeAccount",
  props: ['num'],
  data() {
    return {
        checked:true
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
      click(){

      }
  }
};
</script>

<style lang="scss" scoped>
   @import '@/assets/css/mixin.scss';
.bottom-close{
    padding: 8px;
    width: 100%;
    background-color: skyblue;
    position: fixed;
    bottom: 49px;
    z-index: 9;
    box-sizing: border-box;
    .close-content{
       @include display-flex;
       justify-content: space-between;
       text-align: right;
        .close-content-left{
            @include display-flex;
            .content-top{
                font-size: 10px;
                padding-right: 10px;
                .red{
                    color: red;
                }
            }
        }
    }
}
</style>