/* eslint-disable */
<template>
  <div class="swipe-box">
    <!-- loop 是否循环 布尔值 -->
    <van-swipe :loop="false" class="my-swipe" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>
        <div class="open-now" @click="open">立刻开启</div>
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