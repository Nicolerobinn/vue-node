/* eslint-disable */
<template>
  <div id="box"  :class="classObj" >
          <SidBar class="sidebar-container"/>
          <div class="main-container">
              <navbar />
              <transition name="move" mode="out-in">
                  <keep-alive>
                      <router-view :key="key" v-if="exclude"></router-view>
                  </keep-alive>
              </transition>
              <transition name="move" mode="out-in">
                  <router-view :key="key" v-if="!exclude"></router-view>
              </transition>
          </div>
  </div>
</template>
<script>
  import SidBar    from  '@/components/sidbar.vue'
  import Navbar    from  '@/components/navbar.vue'
  import { mapState } from 'vuex'
  export default {
    name: "index",
    components: {
      SidBar,
      Navbar
    },
    data() {
      return {
        value: true
      };
    },
    computed:{
        ...mapState({
          sidebar: state => state.sidebar,
        }),
        key() {
            return this.$route.fullPath;
        },
        exclude() {
            return this.$route.meta.keepAlive;
        },
        classObj() {
          return {
            hideSidebar: !this.sidebar.opened,
            openSidebar: this.sidebar.opened,
          }
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/index.scss";
</style>