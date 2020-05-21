/* eslint-disable */
<template>
  <div>
    <nav-bar />
    <search />
    <div class="swiper-box">
      <van-swipe :loop="false" class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/home-img1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/home-img2.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/home-img1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/home-img2.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <tab-bar />
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import tabBar from '../components/tabBar'
  import search from '../components/search'
  export default {
    name: "Home",
    data() {
      return {
      };
    },
    components: {
      navBar,
      tabBar,
      search
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/home.scss";
</style>