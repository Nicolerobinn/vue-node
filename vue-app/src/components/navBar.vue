/* eslint-disable */
<template>
  <div>
    <van-nav-bar   @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="location" />
        <span class="location">1123311111111111333231232</span>
      </template>
      <template #right>
        <van-icon name="chat-o" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  export default {
    name: "navBar",
    props: [],
    data() {
      return {
      };
    },
    mounted() {
      this.isleftarrow = this.$route.meta.isleftarrow;
    },
    watch: {
      $route(to, from) {
        this.isleftarrow = to.meta.isleftarrow;
      }
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .van-nav-bar {
    overflow: hidden;
    background-color: #1AC694;
    min-height: 1.5rem;

    .location {
      font-size: 16px;
      color: #fff;
      font-family: SourceHanSansCN;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

    }

    .van-icon {
      font-size: 20px;
      color: #fff
    }
  }
</style>