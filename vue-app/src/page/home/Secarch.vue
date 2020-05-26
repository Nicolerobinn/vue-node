/* eslint-disable */
<template>
  <div>
    <form action="/">
      <van-search v-model="value" show-action :placeholder="placeholder" @search="onSearch" @cancel="onCancel" />
    </form>
  </div>
</template>
<script>
  import { Toast } from 'vant';

  export default {
    name: "Secarch",
    data() {
      return {
        value: '',
        placeholder: '123123'
      };
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        this.$router.back(-1)

      },
    },
  };
</script>

<style lang="scss" scoped>
  .van-search__content {
    border-radius: 20px;
  }
</style>