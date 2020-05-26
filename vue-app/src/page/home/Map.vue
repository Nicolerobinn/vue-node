/* eslint-disable */
<template>
 <div>
      <van-nav-bar
      :title="title"
      >
      <template #left v-if="isBack"  >
        <van-icon  @click="goTo" name="arrow-left" />
      </template>
    </van-nav-bar>
 </div>
</template>
<script>
  export default {
    name: "Map",
    data() {
      return {
        title:'',
        isBack:false,
      };
    },
    components:{
    },
    methods: {
        goTo(){
            this.$router.back(-1)
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
</style>