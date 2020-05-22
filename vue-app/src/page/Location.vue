/* eslint-disable */
<template>
    <van-nav-bar
    :title="title"
    right-text="新增地址"
    @click-right="onClickRight"
    >
      <template #left v-if="isBack"  >
        <van-icon  @click="goTo" name="arrow-left" />
      </template>
    </van-nav-bar>
</template>
<script>
  export default {
    name: "Location",
    data() {
      return {
        title:'',
        isBack:false
      };
    },
    methods: {
        goTo(){
            this.$router.back(-1)
        },
        onClickRight(){
            this.$router.push('/newlocation')

        },
    },
    mounted() {
      this.isBack = this.$route.meta.isBack;
      this.title = this.$route.meta.title;
    },
    watch: {
      $route(to, from) {
        this.isBack = to.meta.isBack;
        this.title =  to.meta.title;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/location.scss";
</style>