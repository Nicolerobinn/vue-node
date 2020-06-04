/* eslint-disable */
<template>
  <div>
    <van-nav-bar
      :title="title"
      fixed
      placeholder
      bgc="#fff"
        >
      <template v-if="num>0" #right   >
        <span   @click="del">删除</span>
      </template>
    </van-nav-bar>
    <swiperCard/>
    <close-account v-show="cartLength>0" :num="num"/>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { moneyFormat } from '@/filter'
  import swiperCard from './components/swiperCard.vue'
  import closeAccount from'./components/closeAccount.vue'
  import Toast from 'vant'
  export default {
    name: "Cart",
    data() {
      return {
        title:'购物车',
        num:0,
        cartLength:0
      };
    },
     components:{
      swiperCard,
      closeAccount
     },
     computed:{
    ...mapState(['shopCart']),
     },
     watch:{
      shopCart(old){
        this.computedShopCart(old)
      }
     },
    activated(){
        if(this.shopCart){
          console.log(this.shopCart)
          this.computedShopCart(this.shopCart)
        }
    },
    methods: {
       // 添加到购物车
    ...mapMutations(['DELETE_SELECT_GOODS']),
        computedShopCart(old){
            this.num  = 0
            this.cartLength = 0
            for(let key in old){
              this.cartLength++
              if(old[key].checked){
                this.num++
              }
            }
        },
        del(){
            this.$dialog({message: '确定删除选中该商品吗？',showCancelButton:true}) .then(() => {
              this.DELETE_SELECT_GOODS()
            })
            .catch(() => {
              // on cancel
            })
        },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/css/cart.scss";
  .goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
  .card{
    padding: 8px 16px;
    .card-content{
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 60px;
      .card-content-left{
            position: relative;
            -webkit-box-flex: 0;
            -webkit-flex: none;
            flex: none;
            height: 60px;
            width: 60px;
            margin-right: 8px;
      }
      .card-content-right{
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              flex-direction: column;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              justify-content: space-between;
              min-width: 0;
              min-height: 60px;
              .content-bottom{
                line-height: 20px;
                .van-card__price{
                      vertical-align:bottom;
                }
                .van-stepper{
                  float: right;
                }
              }
      }
    }
  }
</style>