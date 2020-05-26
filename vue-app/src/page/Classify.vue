/* eslint-disable */
<template>
  <div>
      <nav-bar/>
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  export default {
    name: "Classify",
    data() {
      return {
      };
    },
    components:{
      navBar,
     },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/classify.scss";
</style>