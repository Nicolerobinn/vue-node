/* eslint-disable */
<template>
  <div>
      <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        right-text="消息"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
        <template #left>
          <van-icon name="location"  />
        </template>
        <template #right>
          <van-icon name="chat-o"  />
          <div>消息</div>
        </template>
      </van-nav-bar>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  export default {
    name: "Home",
    props: [],
    data() {
      return {
        title:''
      };
    },
    mounted() {
      this.title = this.$route.meta.title;
      this.isleftarrow = this.$route.meta.isleftarrow;
    },
    watch: {
      $route(to, from) {
        this.title = to.meta.title;
        this.isleftarrow =  to.meta.isleftarrow;
      }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        },
        onClickRight() {
        Toast('按钮');
        },
    },
  };
</script>

<style lang="scss" scoped>
.van-nav-bar{
  background-color: #1AC694;
  & /deep/.van-nav-bar__title{
    font-size:17px;
    font-family:SourceHanSansCN;
    font-weight:bold;
    color:rgba(255,255,255,1);
  }
  .van-nav-bar__right{
    position: relative;
    .van-icon{
    top: -5px;

    }
    div{
      position: absolute;
      top: 25px;
      left:50%;
      transform: translateX(-50%);
      font-size:10px;
      font-family:SourceHanSansCN-Normal;
      color:rgba(255,255,255,1);
    }
  }
  .van-icon{
    color:#fff
  }
}
</style>