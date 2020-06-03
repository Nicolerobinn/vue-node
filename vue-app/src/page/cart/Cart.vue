/* eslint-disable */
<template>
  <div>
    <van-nav-bar
    :title="title"
     fixed
     placeholder
      >
      <template #right   >
        <span   @click="del">删除</span>
      </template>
    </van-nav-bar>
    <swiperCard/>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { moneyFormat } from '@/filter'
  import swiperCard from './components/swiperCard.vue'
  import Toast from 'vant'
  export default {
    name: "Cart",
    data() {
      return {
        title:'购物车',
      };
    },
    components:{
      swiperCard
     },
     computed:{
    ...mapState(['shopCart']),
     },
    methods: {
       // 添加到购物车
    ...mapMutations(['ADD_TO_CART']),
        del(){
            Toast('del')
          console.log(this.shopCart)
        },
        overlimit(){
            Toast('overlimit')
        },
        plus(){
            Toast('plus')
        }
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