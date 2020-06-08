/* eslint-disable */
<template>
  <div>
    <div v-if="Object.keys(shopCart).length==0">
      <div class="clear-cart">
        <img src="@/assets/images/clear.png" alt />
        <p class="text">购物车还是空的~</p>
        <van-button size="small" to="/dashboard/home" round type="info">去逛逛吧</van-button>
      </div>
    </div>
    <div v-else>
      <card v-for="(item,index) in shopCart" :key="index" :list="item" />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { moneyFormat } from "@/filter";
import card from "./card.vue";
import Toast from "vant";
export default {
  name: "swiperCard",
  data() {
    return {};
  },
  components: {
    card
  },
  computed: {
    ...mapState(["shopCart"])
  },
  methods: {
    // 添加到购物车
    ...mapMutations(["DELETE_PRESENT_GOODS"]),
    click(id) {
      this.DELETE_PRESENT_GOODS(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.clear-cart {
  .van-button {
    display: block;
    margin: 2% auto;
  }
  img {
    width: 50%;
    height: 50%;
    @extend .van-button;
  }
  .text {
    text-align: center;
  }
}
</style>