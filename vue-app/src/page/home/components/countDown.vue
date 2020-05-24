/* eslint-disable */
<template>
  <van-count-down :time="time">
    <template v-slot="timeData">
      <span class="text-one">特惠专区</span>
      <span class="text-Two"> 距结束活动</span>
      <span class="block">{{ timeData.hours }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.minutes }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.seconds }}</span>
      <span class="more">更多</span>
    </template>
  </van-count-down>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "countDown",
  props: ["time"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  color: #ee0a24;
}
.text-one {
  font-size: 17px;
  font-family: SourceHanSansCN-bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.text-Two {
  font-size: 10px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.block {
  display: inline-block;
  width: 16px;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
  height: 14px;
  font-size: 11px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 254, 254, 1);
  line-height: 14px;
}
.more {
  float: right;
  color: #1ac694;
}
</style>
