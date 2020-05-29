/* eslint-disable */
<template>
  <!-- 地址列表 -->
  <div class="adrs" ref="wrapper">
    <ul  ref="cont">
        <template  v-if="localList.length > 0">
            <li ref="localItem" class="nearLists position"  @click="checkAddress(item)" v-for="(item,index) in localList" :key="index">
                <div class="title">
                  <div> {{item.address}}</div>  <div class="tag" > {{item.tag}} </div>  <div v-if="item.switchChecked" class="checked" >默认</div>
                </div>
                <p class="house">
                    {{item.house}}
                </p>
                <p class="subTitle">{{item.name}}{{item.radio}} {{item.tel}}</p>
                <van-icon  v-if="item.isChecked"  name="success" />
            </li>
        </template>
        <template v-if="list.length > 0" >
            <li ref="item" class="nearLists"  @click="clickAddredd(item)" v-for="(item,index) in list" :key="'nearLists'+index">
                <p class="title">
                    <span v-if="index==0">[当前]</span>
                    {{item.name}}
                </p>
                <p class="subTitle">{{item.address}}</p>
            </li>
        </template>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "mapLocalList",
  props: {
    list:{
      type: Array,
      default: function() {
        return [];
      }
    },
    localList:{
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
    };
  },
  components: {},
  methods: {
    ...mapMutations(["CHICKED_USER_ADDRESS"]),
    checkAddress(item){
      this.CHICKED_USER_ADDRESS(item);
      this.$emit("callBackMapList", item);
    },
    clickAddredd(item) {
      this.$emit("callBackMapList", item);
    },
    verScroll() {
        if(this.$refs.cont){
          this.$nextTick(() => {
            let wiperHeight = 0;
            let el = this.$refs.item;
                if(this.list.length>0){
                for (let i = 0; i < el.length; i++) {
                wiperHeight += el[i].clientHight;
                }
            }
            if(this.localList.length>0){
                let al = this.$refs.localItem;
                for (let a = 0; a < al.length; a++) {
                  wiperHeight += al[a].clientHight;
                }
            }
            this.$refs.cont.style.height = wiperHeight + "px"; // 修改滚动区域的宽度
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {
                startY: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
                click: true,
                scrollY: true,
                eventPassthrough: "horizontal"
              });
            } else {
              this.scroll.refresh(); //如果dom结构发生改变调用该方法
            }
          });
        }
    },
    render() {
      let that = this;
      this.$nextTick(() => {
        setTimeout(() => {
          that.verScroll();
        }, 0);
      });
    }
  },
  watch: {
    list(val, oldVal) {
        if(this.$refs.cont){
          this.render();
        }
    },
    localList(val,oldVal){
        if(this.$refs.cont){
          this.render();
        }
    }
  }
};
</script>

<style lang="scss" scoped>
$color:#3bba63;
$fontBlod: SourceHanSansCN-Bold;
$fontRegular: SourceHanSansCN-Regular;
.position{
  position: relative;
   .van-icon{
     font-size: 16px;
     position: absolute;
     right: 10px;
     top: 50%;
     color: #3bba63;
     transform: translateY(-50%);
   }
}
.adrs {
  touch-action: none;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .title {
    color: black;
    font-size: 10px;
    font-family: $fontBlod;
    span {
      color: $color;
    }
    div{
        float: left;
        font-size: 10px;
        font-family: $fontBlod;
        padding: 3px;
        &.tag{
            color: $color;
            font-family: $fontRegular;
        }
        &.checked{
            font-family: $fontRegular;
            color: #c8864ae6;
        }
    }
  }
  .subTitle {
    color: grey;
    font-size: 10px;
  }
  .nearLists {
    padding: 8px;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    border: none;
    &:after {
      left: 0;
      content: "";
      position: absolute;
      bottom: 0;
      background: rgba(9, 20, 31, 1);
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(0.2);
      transform: scaleY(0.2);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
}
</style>
