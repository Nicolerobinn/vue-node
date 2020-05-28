/* eslint-disable */
<template>
  <div>
    <van-nav-bar @click-right="onClickRight">
      <template #left v-if="isLocaltion">
        <van-icon @click="goTo" name="location" />
        <span @click="goTo" class="location">{{local  ||'请选择位置信息'}}</span>
      </template>
      <template #right>
        <van-icon name="chat-o" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { Toast } from "vant";
import {getLocalStore} from '@/utils/common'
import { LOCAL_ADDRESS } from '@/utils/pubsub_type'
import PubSub from 'pubsub-js'
export default {
  name: "navBar",
  props: [],
  data() {
    return {
      isLocaltion: false,
      local:getLocalStore('local')
    };
  },
  mounted() {
    PubSub.subscribe(LOCAL_ADDRESS, (msg, data) => {
      if (msg == LOCAL_ADDRESS) {
        this.local = data;
      }
    })
    this.isLocaltion = this.$route.meta.isLocaltion;
  },
  watch: {
    $route(to, from) {
      this.isLocaltion = to.meta.isLocaltion;
    }
  },
    beforeDestroy () {
      PubSub.unsubscribe(this.subscribe)//销毁订阅
    },
  methods: {
    goTo() {
      this.$router.push("location");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  overflow: hidden;
  background-color: #1ac694;
  min-height: 1.5rem;

  .location {
    font-size: 16px;
    color: #fff;
    font-family: SourceHanSansCN;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .van-icon {
    font-size: 20px;
    color: #fff;
  }
}
.van-hairline--bottom::after{
  border: 0 solid #ebedf0;
}
</style>