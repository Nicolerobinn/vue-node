/* eslint-disable */
<template>
  <div>
    <div class="swiper-tab " >
      <ul>
        <li class="active" >
          <p>快捷加购</p>
          <p class="smail" >猜你喜欢</p>
        </li>
        <li>
          <p>时实鲜货</p>
          <p class="smail" >今天辛苦了</p>
        </li>
        <li class="smail" >
          <p>叮咚上新</p>
          <p class="smail" >买点不一样</p>
        </li>
        <li>
          <p>上班带餐</p>
          <p class="smail" >轻奢快手菜</p>
        </li>
      </ul>
    </div>
    <div class="swiper-content" >

    </div>
  </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/css/swiper.css";
export default {
  name: "product",
  props: [],
  data() {
    return {};
  },
  components: {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$smail-width:53%;

.swiper-tab{
  margin-top: 10px;
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
