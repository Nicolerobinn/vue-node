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
    <div class="img-box" >
      <img :src="bannerImg" alt="">
    </div>
    <div class="banner" >
      <div v-for="(e,i) in bannerImages" :key= "i" >
        <img :src="e.icon_url" alt="">
        <p>{{e.name}}</p>
      </div>
    </div>
    <div class="commodity" >
      <countDown textOne="特惠专区" textTwo="距结束活动" :time="time" />
    </div>
    <tab-bar />
  </div>
</template>
<script>
  import navBar from '../components/navBar'
  import tabBar from '../components/tabBar'
  import search from '../components/search'
  import countDown from '../components/countDown'
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
        ],
        bannerImg:'',
        bannerImages:[
        ],
        time:'1231231231231'
      };
    },
    components: {
      navBar,
      tabBar,
      search,
      countDown
    },
    mounted(){
     this.getImg()
    },
    methods: {
     async  getImg(){
        const query =   await get(Urls.ddimg)
        this.bannerImg= query.data.list[1].image_url
        this.bannerImages = query.data.list[2].icon_list
        console.log(query)
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/home.scss";
</style>