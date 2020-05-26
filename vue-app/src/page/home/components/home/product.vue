/* eslint-disable */
<template>
<div>
    <van-sticky :offset-top="40">
      <div class="swiper-tab " >
        <ul>
          <li
            v-for="(item,index) in navList"
            :class="{'active':nowIndex===index}"
            @click="tabClick(index)"
            :key="index"
              >
            <p>{{item.name}}</p>
            <p class="smail" >{{item.smailName}}</p>
          </li>
        </ul>
      </div>
    </van-sticky>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" ref="viewBox">
          <produceitem :arr="productList"/>
        </div>
        <div class="swiper-slide">
          <produceitem :arr="tabbarLlist"/>
        </div>
        <div class="swiper-slide">
          <produceitem :arr="productList"/>
        </div>
        <div class="swiper-slide">
          <produceitem :arr="tabbarLlist"/>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import produceitem from "./produceitem";
import Swiper from "swiper"
import "swiper/css/swiper.css";
import { Urls } from "@/utils/url";
import { get, post } from "@/utils/http";
export default {
  name: "product",
  props: {productList:Array,tabbarLlist:Array},
  data() {
    return {
      navList: [
        { name: '快捷加购',smailName:'强哥喜欢' },
        { name: '时实鲜货',smailName:'今天辛苦了' },
        { name: '强哥上新',smailName:'买点不一样' },
        { name: '上班带餐',smailName:'强哥快手菜' },
      ],
      nowIndex: 0,
      mySwiper: ''
    }
  },
  components: {
    produceitem
  },
  methods: {
    tabClick(index) {
      let nowIndex =  this.nowIndex
      let ratio = 0
      if(nowIndex-index>=2 || index-nowIndex>=2  ){
          ratio = 0
      }else{
          ratio = 300
      }
      this.nowIndex = index;
      this.mySwiper.slideTo(index, ratio, false);
    },
    initSwiper() {
      const that = this
      this.mySwiper = new Swiper('.swiper-container', {
        resistanceRatio : 0,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,
        autoHeight:true,
        on:{
              slideChangeTransitionEnd(){
                const index = this.activeIndex
                that.nowIndex = index
              },
        }
      });
    },
  },
  mounted(){
    this.initSwiper()
  }
};
</script>

<style lang="scss" scoped>
$smail-width:53%;

.swiper-tab{
  margin-top: 10px;
  background-color: #f5f5f5;
  ul{
    overflow: hidden;
    background-color: #fff;
    li{
       position: relative;
       float: left;
       text-align: center;
       width: 25%;
       margin: 10px 0;
       font-size: 12px;
       .smail{
         margin: 2px auto 0;
         width:70%;
         font-size: 10px;
         transform: scale(.8);
       }
      &.active{
        color: #1AC694;
        .smail{
           color: #fff;
           background-color: #1AC694;
           border-radius: 8px;
        }
      }
      // &.active::after{
      //   content: '';
      //   position: absolute;
      //   bottom: -5px;
      //   left: 50%;
      //   transform: translateX(-50%);
      //   height: 2px;
      //   width: $smail-width;
      //   background-color: #1AC694;
      // }
    }
  }
}
</style>
