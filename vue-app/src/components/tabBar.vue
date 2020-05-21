/* eslint-disable */
<template>
  <div>
      <router-view />

        <van-tabbar route>
            <van-tabbar-item replace to="/home" icon="wap-home">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/classify" icon="new-arrival" :dot="true" >
                分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart" icon="cart">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/discover" icon="hot" :dot="true"  >
                发现
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="manager" :badge="5">
                我的
            </van-tabbar-item>
        </van-tabbar>
  </div>
</template>
<script>
  export default {
    name: "tabBar",
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
</style>