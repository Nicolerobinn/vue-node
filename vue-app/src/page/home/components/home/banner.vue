/* eslint-disable */
<template>
  <div>
    <div class="img-box">
      <img :src="bannerImg" alt />
    </div>
    <div class="banner">
      <div v-for="(e, i) in bannerImages" :key="i">
        <img :src="e.icon_url" alt />
        <p>{{ e.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: ["bannerImg", "bannerImages"],
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.img-box {
  img {
    width: 100%;
  }
  background-color: #fff;
}
.banner {

  background-color: #fff;
  overflow: hidden;
  > div {
    width: 20%;
    float: left;
    height: 80px;
    text-align: center;
    img {
      width: 42px;
    }
    p {
      margin: 4px 0;
      font-size: 12px;
      color: rgba(77, 77, 77, 1);
    }
  }
}
</style>
