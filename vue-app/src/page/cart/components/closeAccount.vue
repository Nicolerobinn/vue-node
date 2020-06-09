/* eslint-disable */
<template>
  <div class="bottom-close" >
    <div  class="close-content">
        <van-checkbox @click="click"  v-model="checked" />
        <div  class="close-content-left" >
            <div class="content-top"  >
                 <p>合计<span class="red" >{{ SELECTED_GOODS_PRICE| moneyFormat}}</span></p>
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
import { mapState, mapMutations,mapGetters } from 'vuex'
import {getLocalStore} from '@/utils/common'
import { moneyFormat } from '@/filter'
export default {
  name: "closeAccount",
  props: ['num'],
  data() {
    return {
        checked: false,
    };
  },
  computed:{
    ...mapGetters(['SELECTED_GOODS_PRICE','SELECTED_ALL']),
    ...mapState(['shopCart'])
  },
  watch:{
    SELECTED_ALL:{
      	handler(cval, oval) {
          this.checked = cval
        },
        immediate:true,
				deep: true
    }
  },
  methods: {
       // 添加到购物车
    ...mapMutations(['ALL_SELECT_GOODS']),
    click(){
          let isCheckedAll = this.checked
          this.ALL_SELECT_GOODS({isCheckedAll})
    }
  }
};
</script>

<style lang="scss" scoped>
   @import '@/assets/css/mixin.scss';
.bottom-close{
    padding: 8px;
    width: 100%;
    background-color: #fde9e9;
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