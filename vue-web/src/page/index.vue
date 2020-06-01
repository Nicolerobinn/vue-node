/* eslint-disable */
<template>
  <div id="box" >
    <el-row  style="height: 100%; ">
        <el-col :span="5"   style="min-height: 100%; background-color: #324057;">
          <SidBar/>
        </el-col>
        <el-col :span="19"  style="height: 100%;overflow: auto;" >
          <div class="content">
              <transition name="move" mode="out-in">
                  <keep-alive>
                      <router-view :key="key" v-if="exclude"></router-view>
                  </keep-alive>
              </transition>
              <transition name="move" mode="out-in">
                  <router-view :key="key" v-if="!exclude"></router-view>
              </transition>
          </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
  import SidBar    from  '@/components/sidbar.vue'
  export default {
    name: "index",
    components: {
      SidBar
    },
    data() {
      return {
        value: true
      };
    },
    computed:{
        key() {
            return this.$route.fullPath;
        },
        exclude() {
            return this.$route.meta.keepAlive;
        }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/index.scss";
</style>