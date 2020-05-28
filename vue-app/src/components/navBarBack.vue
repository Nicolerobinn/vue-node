/* eslint-disable */
<template>
      <van-nav-bar
    :title="title"
     fixed
     placeholder
      >
      <template #left   >
        <van-icon  @click="goTo" name="arrow-left" />
      </template>
    </van-nav-bar>
</template>
<script>
import { Toast } from "vant";
export default {
  name:'navBarBack',
  props: [],
  data() {
    return {
        title:'',
    };
  },
    mounted() {
      this.title = this.$route.meta.title;
    },
    watch: {
      $route(to, from) {
        this.title =  to.meta.title;
      }
    },
  methods: {
        goTo(){
            this.$router.back(-1)
        },
  }
};
</script>

<style lang="scss" scoped>
  $color:#1AC694;
  .van-nav-bar .van-icon{
    color: $color;
  }
</style>