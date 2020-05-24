/* eslint-disable */
<template>
  <div class="commodity">
    <countDown :time="time" />
  </div>
</template>
<script>
import countDown from "./countDown";
export default {
  name: "scrollX",
  props: ["arr", "time"],
  data() {
    return {};
  },
  components: {
    countDown
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
