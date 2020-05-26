/* eslint-disable */
<template>
 <div>
      <van-nav-bar
      :title="title"
      >
      <template #left v-if="isBack"  >
        <van-icon  @click="goTo" name="arrow-left" />
      </template>
    </van-nav-bar>
    <address-edit/>
 </div>
</template>
<script>
  import { Toast } from 'vant';
  import addressEdit from '@/components/addressEdit.vue'
  export default {
    name: "NewLocation",
    data() {
      return {
        title:'',
        isBack:false,
      };
    },
    components:{
       addressEdit
    },
    methods: {
        goTo(){
            this.$router.back(-1)
        },
        onSave() {
          Toast('save');
        },
        onDelete() {
          Toast('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [
              {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
              },
            ];
          } else {
            this.searchResult = [];
          }
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
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/css/location.scss";
</style>