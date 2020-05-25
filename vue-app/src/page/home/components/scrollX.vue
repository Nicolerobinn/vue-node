/* eslint-disable */
<template>
  <div class="commodity">
    <countDown :time="time" />
    <scroll :arr="arr" />
  </div>
</template>
<script>
import scroll from "./scroll";
import countDown from "./countDown";
import BScroll from "better-scroll";
export default {
  name: "scrollX",
  props: ["arr", "time"],
  data() {
    return {};
  },
  components: {
    countDown,
    scroll
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.commodity{
  background-color: #fff;
 }
</style>
