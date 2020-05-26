/* eslint-disable */
<template>
  <div class="swiper-box">
    <van-swipe :loop="false" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(e, i) in swiperImages" :key="i">
        <img :src="e.url" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "swiper",
  props: ["swiperImages"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.swiper-box {
  padding: 0 15px;
  background: #1ac694; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1ac694,
    #fff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1ac694,
    #fff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .my-swipe .van-swipe-item {
    border-radius: 15px;
    overflow: hidden;
    color: #fff;
    font-size: 20px;
    height: auto;
    text-align: center;
    background-color: #39a9ed;
    box-sizing: border-box;

    img {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
