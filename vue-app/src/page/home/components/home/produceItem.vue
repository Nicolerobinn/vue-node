
<template>
  <div id="produceItem">
    <waterfall :col='2'   :data="arr"     >
      <template>
        <div class="item"
            v-for="(product,index) in arr"
            :key="index"
            @click.stop="goToGoodsDetail(product)">
          <img v-lazy="product.small_image"
              alt="">
          <p class="itemTitle">{{product.name}}</p>
          <p class="itemSubTitle">{{product.spec}}</p>
          <span class="price">
            {{product.price | moneyFormat}}
          </span>
          <span class="originPrice">{{product.origin_price | moneyFormat}}</span>
          <div class="buyCar"
              @click.stop="addCart(product)">
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script type="text/javascript">
import { moneyFormat } from '@/filter'
import { mapMutations } from 'vuex'

export default {
  props: {
    arr: Array
  },
  data () {
    return {
      isShowEatTag: false
    }
  },
  components: {
  },
  methods: {
    ...mapMutations({
      addCart: 'ADD_TO_CART'
    }),
    // 商品详情页面
    goToGoodsDetail (goods) {
      // 跳转到商品详情页面并且传值
      this.$router.push({
        name: "goodsDetail",
        query: {
          id: goods.id,
          name: goods.name,
          small_image: goods.small_image,
          price: goods.price,
          spec: goods.spec,
          total_sales: goods.total_sales,
          origin_price: goods.origin_price,
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
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
    img {
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
    &::After{
      content: "+";
      position: absolute;
      right: 0.4rem;
      bottom: 0.4rem;
      width: 0.5625rem;
      height: 0.5625rem;
      border-radius: 50%;
      font-size: 0.5rem;
      background-color: #1AC694;
      color: #fff;
      text-align: center;
      line-height: 0.5625rem;
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
.buyCar {
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  right: 32px;
  bottom: 16px;
}
</style>
