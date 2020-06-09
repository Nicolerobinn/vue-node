<template>
  <div id="produceItem">
    <waterfall :col="2" :data="arr">
      <div
        class="item"
        v-for="(product, index) in arr"
        :key="index"
        @click="goToGoodsDetail(product)"
      >
        <img v-lazy="product.small_image" alt="" />
        <p class="itemTitle">{{ product.name }}</p>
        <p class="itemSubTitle">{{ product.spec }}</p>
        <span class="price">
          {{ product.price | moneyFormat }}
        </span>
        <span class="originPrice">{{
          product.origin_price | moneyFormat
        }}</span>
        <van-icon
          class="after"
          name="cart-circle"
          @click.stop="addToCart(product, index)"
        />
      </div>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { moneyFormat } from "@/filter";
import { mapMutations } from "vuex";
import { CartMixin } from "@/mixins/cart.js";
import { CartDetail } from "@/mixins/cartDetail.js";

export default {
  mixins: [CartDetail, CartMixin],
  props: {
    arr: Array
  },
  data() {
    return {
      isShowEatTag: false
    };
  },
  components: {},
  methods: {
    // 添加到购物车
    ...mapMutations(["ADD_TO_CART"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
@include cart;
#produceItem {
  background-color: #f5f5f5;
  height: auto;
  padding-top: 16px;
}
.item {
  margin: 0 5% 12px;
  width: 90%;
  position: relative;
  background-color: white;
  border-radius: 6px;
  padding-bottom: 10px;
  > img {
    width: 92%;
    margin: 0 auto;
    display: block;
    // 等比缩小图片来适应元素的尺寸
    background-size: contain;
    background-image: url("../../../../assets/images/loadGif.gif");
  }
  .itemTitle {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 10px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .itemSubTitle {
    padding-left: 16px;
    padding-right: 16px;
    color: gray;
    padding-top: 0.2rem;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 10px;
  }
  .price {
    padding-left: 16px;
    color: #f37078;
    font-size: 12px;
  }

  .after {
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 20px;
    color: #1ac694;
  }
}
.tagEat {
  margin-left: 16px;
  padding: 0.09rem;
  color: orangered;
  width: 2.5rem;
  height: 0.32px;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  border: 0.05rem solid red;
}

.originPrice {
  font-size: 10px;
  color: #999999;
  text-decoration: line-through;
}
</style>
