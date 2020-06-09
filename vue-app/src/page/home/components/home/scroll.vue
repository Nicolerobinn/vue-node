<template>
  <div class="scroll" ref="wrapper">
    <ul class="cont" ref="cont">
      <li
        ref="item"
        class="cont-item"
        v-for="(item, index) of arr"
        :key="index"
        @click="goToGoodsDetail(item)"
      >
        <div class="cont-img">
          <img class="img" :src="item.small_image" />
        </div>
        <div>
          <p>
            {{ item.name }}
          </p>
          <div class="cont-price">
            <p class="price">{{ item.price | moneyFormat }}</p>
            <p class="price old-price">{{ item.origin_price | moneyFormat }}</p>
            <van-icon
              class="after"
              name="cart-circle"
              @click.stop="addToCart(item, index)"
            />
          </div>
        </div>
      </li>
    </ul>
    <transition
      appear
      @after-appear="afterEnter"
      @before-appear="beforeEnter"
      v-for="(item, index) in showMoveDot"
      :key="index.id"
    >
      <div class="move_dot" ref="ball" v-if="item">
        <!-- 小球图片 -->
        <img :src="dropImage" alt="" />
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { moneyFormat } from "@/filter";
import { mapMutations, mapState } from "vuex";
import { CartMixin } from "@/mixins/cart.js";
import { CartDetail } from "@/mixins/cartDetail.js";
export default {
  name: "scroll",
  mixins: [CartDetail, CartMixin],
  props: {
    arr: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    verScroll() {
      this.$nextTick(() => {
        let wiperWidth = 0;
        let el = this.$refs.item;
        for (let i = 0; i < el.length; i++) {
          wiperWidth += el[i].clientWidth;
        }
        this.$refs.cont.style.width = wiperWidth + "px"; // 修改滚动区域的宽度
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    },
    render() {
      let that = this;
      this.$nextTick(() => {
        setTimeout(() => {
          that.verScroll();
        }, 0);
      });
    },
    // 添加到购物车
    ...mapMutations(["ADD_TO_CART"])
  },
  mounted() {},
  watch: {
    arr(val, oldVal) {
      this.render(); // user中的age属性发生变化时，调用render方法
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
@include cart;
.scroll {
  height: 160px;
  background: #fff;
  overflow: hidden;
  .cont {
    height: 100%;
    width: auto;
    list-style: none;
    font-size: 12px;
    text-align: center;
    .cont-item {
      position: relative;
      float: left;
      width: 90px;
      margin: 0 0.1rem;
      height: 100%;
      .cont-img {
        overflow: hidden;
        height: 0;
        padding-bottom: 100%;
        .img {
          width: 100%;
        }
      }
      p {
        text-align: left;
        font-size: 12px;
      }
      .cont-price {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        p {
          color: red;
        }
        .old-price {
          float: left;
          transform: scale(0.8, 0.8);
          text-decoration: line-through;
          font-size: 10px;
          color: gray;
        }
        .after {
          position: absolute;
          right: 4px;
          bottom: 6px;
          font-size: 20px;
          color: #1ac694;
        }
      }
    }
  }
}
</style>
