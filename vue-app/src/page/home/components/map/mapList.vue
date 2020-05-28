/* eslint-disable */
<template>
  <div>
    <!-- 地址列表 -->
    <div class="adrs" ref="wrapper">
      <ul v-if="list.length > 0">
        <van-cell-group>
          <ul>
            <li class="nearLists"
                v-for="(item,index) in list"
                :key="index"
                @click="clickAddredd(item)">
                <p class="title">  <span v-if="index==0" >[当前]</span> {{item.name}}</p>
                <p class="subTitle">{{item.address}}</p>
            </li>
          </ul>
        </van-cell-group>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "mapList",
  props: ['list'],
  data() {
    return {};
  },
  components: {},
  methods: {
      clickAddredd(item){
          this.$emit('callBackMapList',item)
      },
        render(){
            let that = this
            this.$nextTick(() => {
                setTimeout(() => {
                that.verScroll()
            }, 0)
            })
        },
        verScroll () {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {
                startY: 0,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
                click: true,
                scrollY: true,
                eventPassthrough: 'horizontal'
              })
            } else {
              this.scroll.refresh() //如果dom结构发生改变调用该方法
            }
          })
        },
  },
    watch: {
      list(val, oldVal){
          this.render();
      },
    },
};
</script>

<style lang="scss" scoped>
  .adrs {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100vh);
    .title {
      color: black;
      font-size: 10px;
      font-family: SourceHanSansCN-Bold;
      span{
        color:#3bba63 ;
      }
    }
    .subTitle {
      color: grey;
      font-size:10px;
    }
    .nearLists {
      padding: 8px;
      line-height: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      border: none;
      width: 100%;
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
    ul li.active {
      color: deeppink;
    }
  }
</style>
