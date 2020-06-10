/* eslint-disable */
<template>
  <div>
    <van-icon name="arrow-left" @click="click" />
    <van-swipe :autoplay="4000" class="swiper" indicator-color="skyblue">
      <van-swipe-item v-for="(a, b) in 4" :key="b">
        <img :src="obj.small_image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="padding">
      <p class="title">{{ obj.name }}</p>
      <p class="smail-title">{{ obj.spec }}</p>
      <p>
        <span class="price">{{ obj.price | moneyFormat }}</span>
        <span class="old-price">{{ obj.origin_price | moneyFormat }}</span>
      </p>
    </div>
    <div class="bottom" >
      <van-icon name="shopping-cart-o" :badge="badge" />
        <van-button @click="addToCart" type="primary" round   size="small"  >
            <span >加入购物车</span>
        </van-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { moneyFormat } from "@/filter";
export default {
  name: "CratDetail",
  data() {
    return {
      img: "",
      obj: {},
    };
  },
  components: {},
  computed: {
    ...mapState(['shopCart'], ['userInfo']),
    badge () {
      let ID = this.obj.id
      let num  = ''
      Object.values(this.shopCart).forEach((item, index) => {
          if(item.id == ID){
            num =   item.num;
          }
      });
      return num
    }
  },
  created() {
    this.obj = this.$route.query;
    const {
      name,
      origin_price,
      price,
      small_image,
      spec,
      total_sales
    } = this.$route.query;
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO','ADD_TO_CART']),
    click() {
      this.$router.go(-1);
    },
    addToCart () {
     this.ADD_TO_CART(this.obj);
    },
  }
};
</script>

<style lang="scss" scoped>
   @import '@/assets/css/mixin.scss';
.swiper {
  height: 380px;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-icon-arrow-left {
  position: fixed;
  left: 5%;
  top: 5%;
  z-index: 999999;
  font-size: 20px;
}
.title {
  font-family: "SourceHanSansCN-Bold";
  font-size: 16px;
}
.smail-title {
  font-family: "SourceHanSansCN";
}
.price {
  color: red;
  font-size: 14px;
}
.old-price {
  text-decoration: line-through;
  color: gray;
  font-size: 10px;
}
.padding {
  padding: 10px;
  p {
    margin: 5px;
  }
}
.bottom{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  @include display-flex;
  justify-content: space-between;
}
.van-icon-shopping-cart-o{
  font-size: 22px;
}
</style>
