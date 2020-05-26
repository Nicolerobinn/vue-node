/* eslint-disable */
<template>
  <div>
    <nav-bar />
    <search />
    <swiper :swiperImages="swiperImages" />
    <banner :bannerImages="bannerImages" :bannerImg="bannerImg" />
    <scrollX :time="time" :arr="scrollImages" />
    <product :productList="productList"  :tabbarLlist="tabbarLlist" />
    <tab-bar />
  </div>
</template>
<script>
import product from "./components/product";
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
      time: "1231231231231",
      scrollImages:[],
      productList:[],
      tabbarLlist:[]
    };
  },
  components: {
    navBar,
    tabBar,
    search,
    scrollX,
    banner,
    swiper,
    product
  },
  mounted() {
    this.getImg();
  },
  methods: {
    async getImg() {
      const query = await get(Urls.ddimg);
      let res = query.data.list
      this.bannerImg =res[1].image_url;
      this.bannerImages =res[2].icon_list;
      this.scrollImages =res[7].product_list;
      // 给限时抢购赋值
      this.productList =res[3].product_list;
      // 给Tabbar 商品列表赋值
      this.tabbarLlist =res[12].product_list;
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home.scss";
</style>
