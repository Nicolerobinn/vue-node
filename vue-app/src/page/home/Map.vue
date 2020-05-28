/* eslint-disable */
<template>
 <div  id="map">
    <van-nav-bar
      :title="title"
      >
      <template #left v-if="isBack"  >
        <van-icon  @click="goTo" name="arrow-left" />
      </template>
    </van-nav-bar>
    <map-v @callBackSetMapList="callBackSetMapList"  />
    <map-list :list="list" @callBackMapList="callBackMapList" />
 </div>
</template>
<script>
import mapV from './components/map/mapV'
import mapList from './components/map/mapList'
import PubSub from 'pubsub-js'
import { EDIT_ADDRESS } from '@/utils/pubsub_type'
  export default {
    name: "Map",
    data() {
      return {
        title:'',
        isBack:false,
        list:[]
      };
    },
    components:{
      mapList,
      mapV
    },
    methods: {
      callBackMapList(e){
        PubSub.publish(EDIT_ADDRESS, e.name);
        console.log(EDIT_ADDRESS, e.name)
        this.$router.back()
      },
      callBackSetMapList(arr){
       this.list = arr
      },
      goTo(){
          this.$router.back(-1)
      },
      clickAddredd (item) {
        this.$router.back();
      },
    },
    mounted() {
      this.isBack = this.$route.meta.isBack;
      this.title = this.$route.meta.title;
    },
    watch: {
      $route(to, from) {
        this.isBack = to.meta.isBack;
        this.title =  to.meta.title;
      },
    },
  };
</script>

<style lang="scss" scoped>
.van-cell-group{
  height: 100%;
}

</style>