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
    <div></div>
  </div>
</template>
<script>
import { moneyFormat } from "@/filter";
export default {
  name: "CratDetail",
  data() {
    return {
      img: "",
      obj: {}
    };
  },
  components: {},
  created() {
    this.obj = this.$route.query;
    console.log(this.obj);
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
    click() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
