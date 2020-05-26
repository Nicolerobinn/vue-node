/* eslint-disable */
<template>
  <div>
    <van-tabbar v-model="active"
                :safe-area-inset-bottom=true
                class="active_tab"
                active-color="#1ac694"
                fixed
                placeholder
                >
      <van-tabbar-item
                       v-for="(item,index) in tabbars"
                       :key="index"
                       :id="index==3?'buycar':''"
                       @click="tab(index,item.name)"
                       :info="item.name=='cart'?goodsNum:''"
                       :icon="item.icon"
                       replace
       >
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
       </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { setLocalStore, getLocalStore } from '@/utils/common.js'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "tabBar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      num:5,
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: '首页',
          icon:'wap-home'
        },
        {
          name: "classify",
          title: '分类',
          icon:'new-arrival'
        },
        {
          name: "cart",
          title: '购物车',
          icon:'cart',
          num: 5
        },
        {

          name: "discover",
          title: '发现',
          icon:'hot'
        },
        {
          name: "my",
          title: '我的',
          icon:'manager'
        }
      ]
    };
  },
  mounted () {
    this._initData();
  },
  created () {
    //通过路由跳转绑定Tabbar的选中
    this.tabbarSelected(this.$route.name);
  },
  watch: {
    // 监听路由变化,保证路由跳转Tabbar选中正常
    $route: {
      handler (val, oldval) {
         this.tabbarSelected(val.name);
      }
    },
    deep: true
  },
  computed: {
    ...mapState(['shopCart'], ['userInfo']),
    goodsNum () {
      let num = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        num += goods.num;
      });
      if (num > 0) {
        return num;
      }
    }
  },
  methods: {
    // 0. 延展mutations方法
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    tab (index, val) {
      this.$router.push(val);
      this.currIndex = index;
    },
    _initData () {
      this.INIT_SHOP_CART();
      this.INIT_USER_INFO();
    },
    tabbarSelected (item) {
      const mapType = {
        home: 0,
        classify: 1,
        cart: 2,
        discover: 3,
        my: 4
      }
      this.active = mapType[item]
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.van-tabbar__placeholder {
  height: 54.6875px!important;
}
</style>