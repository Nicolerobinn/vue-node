/* eslint-disable */
<template>
  <div>
      <nav-bar :title="title"/>
      <search  />
      <tab-bar/>
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import tabBar from '../components/tabBar'
  import search from '../components/search'
  export default {
    name: "Home",
    data() {
      return {
        title:'首页'
      };
    },
    components:{
      navBar,
      tabBar,
      search
     },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/home.scss";
</style>