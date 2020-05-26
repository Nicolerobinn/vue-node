<template>
    <div class="scroll" ref="wrapper">
      <ul class="cont" ref="cont">
        <li class="cont-item" v-for="item of arr" :key="item.id">
          <div class="cont-img">
            <img class="img" :src="item.small_image" >
          </div>
            <div>
                  <p>
                      {{item.name}}
                  </p>
                  <div class="cont-price">
                      <p class="price">￥{{item.price}}</p>
                      <p class="price old-price">￥{{item.origin_price}}</p>
                  </div>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  props: {
    arr: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    verScroll () {
      let width = this.arr.length * 97// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度

      this.$refs.cont.style.width = width + 'px'  // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,  // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() //如果dom结构发生改变调用该方法
        }
      })
    },
    render(){
        let that = this
        this.$nextTick(() => {
            setTimeout(() => {
            that.verScroll()
        }, 0)
        })
    }
  },
  mounted () {
  },
  watch: {
    arr: function(val, oldVal){
        this.render(); // user中的age属性发生变化时，调用render方法
    }
}
}
</script>

<style lang="scss" scoped>
  .scroll {
    height: 160px;
    background: #fff;
    overflow: hidden;
    .cont {
      height: 100%;
      width: auto;
      list-style: none;
      font-size: 12px;
      text-align: center;
      .cont-item {
      position: relative;
        float: left;
        width: 90px;
        margin: 0 .1rem;
        height: 100%;
        .cont-img {
          overflow: hidden;
          height: 0;
          padding-bottom: 100%;
          .img {
            width: 100%;
          }
        }
        p{
            text-align: left;
            font-size: 12px;
        }
        .cont-price{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            p{
                color: red;
            }
            .old-price{
                float: left;
                transform:scale(.8,.8);
                text-decoration:line-through;
                font-size: 10px;
                color: gray;
            }
            &::after{
              content: "+";
              position: absolute;
              right: 4px;
              bottom: 6px;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              font-size: 16px;
              background-color: #1AC694;
              color:#fff;
              text-align: center;
              line-height: 18px;
            }
        }
      }
    }
  }
</style>