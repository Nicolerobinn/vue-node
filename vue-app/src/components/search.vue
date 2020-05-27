/* eslint-disable */
<template>
    <van-sticky :offset-top="0">
      <div class="secarch-router"  >
        <div class="secarch-input" @click="goTo">
          <div class="input-text">
            <van-icon name="search" /><span>{{placeholder}}</span></div>
        </div>
      </div>
    </van-sticky>
</template>
<script>
  export default {
    name: "search",
    props: [ 'bgc' ],
    data() {
      return {
        placeholder: '快手菜'
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