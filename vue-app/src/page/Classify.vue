/* eslint-disable */
<template>
  <div>
      <nav-bar/>
      <search />
  </div>
</template>
<script>
  import navBar from '@/components/navBar'
  import search from "@/components/search";
  export default {
    name: "Classify",
    data() {
      return {
      };
    },
    components:{
      navBar,
      search
     },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/classify.scss";
</style>