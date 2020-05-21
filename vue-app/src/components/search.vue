/* eslint-disable */
<template>
    <van-search
        v-model="value"
        shape="round"
        background="#1AC694"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
</template>
<script>
  import { Toast } from 'vant';
  export default {
    name: "search",
    props: [],
    data() {
      return {
          value:''
      };
    },
    methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
    },
  };
</script>

<style lang="scss" scoped>
</style>