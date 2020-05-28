/* eslint-disable */
<template>
  <div>
        <van-nav-bar
      :title="title"
      right-text="新增地址"
      @click-right="onClickRight"
      placeholder
      fixed
      >
        <template #left v-if="isBack"  >
          <van-icon  @click="goTo" name="arrow-left" />
        </template>
      </van-nav-bar>
      <map-v @callBackSetMapList="callBackSetMapList" :show="false"  />
      <map-list :list="list" @callBackMapList="callBackMapList" />
  </div>
</template>
<script>
import mapV from './components/map/mapV'
import mapList from './components/map/mapList'
import { LOCAL_ADDRESS } from '@/utils/pubsub_type'
import {setLocalStore} from '@/utils/common'
import PubSub from 'pubsub-js'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: "Location",
    data() {
      return {
        title:'',
        isBack:false,
        list:[]
      };
    },
    computed: {

      ...mapState(['shippingAddress']),
    },
    components:{
      mapList,
      mapV
    },
    methods: {
      ...mapMutations(['INIT_USER_SHOPPING_ADDRESS']),
      callBackMapList(e){
        PubSub.publish(LOCAL_ADDRESS, e.name);
        setLocalStore('local',e.name)
        this.$router.back()
      },
      callBackSetMapList(arr){
        this.list = arr
      },
      goTo(){
        this.$router.back(-1)
      },
      onClickRight(){
        this.$router.push('newlocation')

      },
    },
    mounted() {
      this.INIT_USER_SHOPPING_ADDRESS();
      this.isBack = this.$route.meta.isBack;
      this.title = this.$route.meta.title;
    },
    watch: {
      $route(to, from) {
        this.isBack = to.meta.isBack;
        this.title =  to.meta.title;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/css/location.scss";
  $color:#1AC694;
  .van-nav-bar .van-icon{
    color: $color;
  }
  /deep/ .van-nav-bar__text{
    color: $color!important;
  }
  >>>.adrs{
    max-height:700px;
  }
</style>