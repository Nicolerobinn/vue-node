/* eslint-disable */
<template>
  <div>
      <search  />
  </div>
</template>
<script>
  import search from "@/components/search";
  export default {
    name: "Classify",
    data() {
      return {
      };
    },
    components:{
      search
     },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/classify.scss";
</style>