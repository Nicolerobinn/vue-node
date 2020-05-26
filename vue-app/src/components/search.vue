/* eslint-disable */
<template>
  <div class="secarch-router">
    <div class="secarch-input" @click="goTo">
      <div class="input-text">
        <van-icon name="search" /><span>123123123</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "search",
    props: [],
    data() {
      return {
        value: ''
      };
    },
    methods: {
      goTo() {
        this.$router.push('secarch')
      }
    },
  };
</script>

<style lang="scss" scoped>
  .secarch-router {
    width: 100%;
    padding: 14px 16px;
    background-color: #1AC694;
    box-sizing: border-box;

    .secarch-input {
      height: 25px;
      background-color: #fff;
      border-radius: 20px;
      padding: 0 15px;
      vertical-align: middle;

      .input-text {
        height: 100%;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>