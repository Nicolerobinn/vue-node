/* eslint-disable */
<template>
  <div>
    <div v-if="shopCart.length==0" >

    </div>
    <div  v-else>
          <card   v-for="(item,index) in shopCart" :key="index"   :list="item" />
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { moneyFormat } from '@/filter'
  import card  from './card.vue'
  import Toast from 'vant'
  export default {
    name: "swiperCard",
    data() {
      return {
      };
    },
    components:{
        card
     },
     computed:{
    ...mapState(['shopCart']),
     },
    methods: {
       // 添加到购物车
      ...mapMutations(['DELETE_PRESENT_GOODS']),
      click(id){
        this.DELETE_PRESENT_GOODS(id)
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
</style>