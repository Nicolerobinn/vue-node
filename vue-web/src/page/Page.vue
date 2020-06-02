/* eslint-disable */
<template>
  <el-container>
  </el-container>
</template>
<script>
  export default {
    name: "Home",
    components: {
    },
    data() {
      return {
      };
    },
  computed: {
    breadList() {
    return this.$route.meta.breadList || [];
    }
  }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>