/* eslint-disable */
<template>
  <div>
    <nav-bar />
    <search />
    <div class="swiper-box">
      <van-swipe :loop="false" class="my-swipe" indicator-color="white">
        <van-swipe-item v-for="(e,i) in swiperImages" :key= "i" >
          <img :src="e.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>

    <tab-bar />
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import tabBar from '../components/tabBar'
  import search from '../components/search'
  import {Urls} from '../utils/url'
  import {get,post} from  '../utils/http'
  export default {
    name: "Home",
    data() {
      return {
        swiperImages:[
           {url:require('../assets/images/home-img1.jpg')},
           {url:require('../assets/images/home-img2.jpg')},
           {url:require('../assets/images/home-img1.jpg')},
           {url:require('../assets/images/home-img2.jpg')},
        ]
      };
    },
    components: {
      navBar,
      tabBar,
      search
    },
   async mounted(){
      const query =   await get(Urls.query)
      console.log(query)
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/home.scss";
</style>