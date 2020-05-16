/* eslint-disable */
<template>
  <div class="app-cont">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>

  </div>
</template>
<script>
  export default {
    name: "index",
    components: {
    },
    data() {
      return {
        value: true
      };
    },
    methods: {
    },
    mounted() {
    },
    created() {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/index.sass";
</style>