/* eslint-disable */
<template>
  <div class="swipe-box">
    <div class="swipe-after" @click="open" >跳过</div>
    <!-- loop 是否循环 布尔值 -->
    <van-swipe :loop="false" class="my-swipe" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/images/index-img1.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/index-img1.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/index-img1.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/index-img1.png" alt="">
        <div class="open-now" @click="open">立即开启</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    name: "Index",
    data() {
      return {
      };
    },
    methods: {
      open() {
        localStorage.setItem('openNow', '1')
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/index.scss";
</style>