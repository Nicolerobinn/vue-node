/* eslint-disable */
<template>
  <div>
    <nav-bar />
    <search />
    <swiper :swiperImages="swiperImages" />
    <banner :bannerImages="bannerImages" :bannerImg="bannerImg" />
    <scrollX :time="time" />
    <tab-bar />
  </div>
</template>
<script>
import navBar from "@/components/navBar";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
import scrollX from "./components/scrollX";
import banner from "./components/banner";
import swiper from "./components/swiper";
import { Urls } from "@/utils/url";
import { get, post } from "@/utils/http";
export default {
  name: "Home",
  data() {
    return {
      swiperImages: [
        { url: require("@/assets/images/home-img1.jpg") },
        { url: require("@/assets/images/home-img2.jpg") },
        { url: require("@/assets/images/home-img1.jpg") },
        { url: require("@/assets/images/home-img2.jpg") }
      ],
      bannerImg: "",
      bannerImages: [],
      time: "1231231231231"
    };
  },
  components: {
    navBar,
    tabBar,
    search,
    scrollX,
    banner,
    swiper
  },
  mounted() {
    this.getImg();
  },
  methods: {
    async getImg() {
      const query = await get(Urls.ddimg);
      this.bannerImg = query.data.list[1].image_url;
      this.bannerImages = query.data.list[2].icon_list;
      console.log(query);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home.scss";
</style>
