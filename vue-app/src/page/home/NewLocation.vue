/* eslint-disable */
<template>
  <div>
    <nav-bar-back />
    <address-edit />
  </div>
</template>
<script>
import { Toast } from "vant";
import navBarBack from "@/components/navBarBack.vue";
import addressEdit from "@/components/addressEdit.vue";
export default {
  name: "NewLocation",
  data() {
    return {
      title: "",
      isBack: false
    };
  },
  components: {
    addressEdit,
    navBarBack
  },
  methods: {
    onSave() {
      Toast("save");
    }
  },
  mounted() {
    this.isBack = this.$route.meta.isBack;
    this.title = this.$route.meta.title;
  },
  watch: {
    $route(to, from) {
      this.isBack = to.meta.isBack;
      this.title = to.meta.title;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/location.scss";
</style>
