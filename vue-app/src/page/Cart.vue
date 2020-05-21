/* eslint-disable */
<template>
  <div>
      <nav-bar/>
      <tab-bar/>
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import tabBar from '../components/tabBar'
  export default {
    name: "Cart",
    data() {
      return {
      };
    },
    components:{
      navBar,
      tabBar
     },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/cart.scss";
</style>