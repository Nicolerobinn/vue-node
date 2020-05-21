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
    name: "Classify",
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
  @import "../assets/css/classify.scss";
</style>