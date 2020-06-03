<template>
    <div class="scroll" ref="wrapper">
      <ul class="cont" ref="cont">
        <li ref="item" class="cont-item" v-for="(item,index) of arr" :key="index">
          <div class="cont-img">
              <img class="img" :src="item.small_image" >
            </div>
            <div>
              <p>
                {{item.name}}
              </p>
            <div class="cont-price">
              <p class="price">{{item.price |moneyFormat}}</p>
              <p class="price old-price">{{item.origin_price | moneyFormat}}</p>
              <van-icon class="after" name="cart-circle"  @click.stop="addToCart(item,index)" />
            </div>
          </div>
        </li>
      </ul>
       <transition appear
                  @after-appear='afterEnter'
                  @before-appear="beforeEnter"
                  v-for="(item,index) in showMoveDot"
                  :key="index.id">
        <div class="move_dot"
             ref="ball"
             v-if="item">
          <!-- 小球图片 -->
          <img :src="dropImage"
               alt="">
        </div>
      </transition>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {moneyFormat} from '@/filter'
import { mapMutations, mapState } from 'vuex'
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
      showMoveDot: [], //控制下落的小圆点显示隐藏
      elLeft: 0, //当前点击购物车按钮在网页中的绝对top值
      elTop: 0, //当前点击购物车按钮在网页中的绝对left值
      dropImage: ''
    }
  },
  methods: {
    verScroll () {
      this.$nextTick(() => {
        let wiperWidth = 0;
        let el = this.$refs.item;
        for (let i = 0; i < el.length; i++) {
          wiperWidth += el[i].clientWidth;
        }
        this.$refs.cont.style.width = wiperWidth + 'px'  // 修改滚动区域的宽度
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
    },
       // 添加到购物车
    ...mapMutations(['ADD_TO_CART']),
    addToCart (product, num) {
      console.log(product)
      this.ADD_TO_CART(product);
        // 取出商品的图片
        this.dropImage = product.small_image;
        // 增加到购物车
        this.elLeft = event.target.getBoundingClientRect().left;
        this.elTop = event.target.getBoundingClientRect().top;
        this.showMoveDot = [...this.showMoveDot, true];
    },
    beforeEnter (el) {
      // 设置transform值
      el.style.transform = `translate3d(${this.elLeft - 30}px,${this.elTop - 100}px , 0)`;
      // 设置透明度
      el.style.opacity = 0;
    },
    afterEnter (el) {
      // 获取底部购物车徽标的位置
      const badgePosition = document
        .getElementById("buycar")
        .getBoundingClientRect();
      // 设置位移
      el.style.transform = `translate3d(${badgePosition.left-20 }px,${badgePosition.top - 30}px,0)`
      // 增加贝塞尔曲线
      el.style.transition = 'transform .88s cubic-bezier(0.3, -0.25, 0.7, -0.15)';
      el.style.transition = 'transform .88s linear';
      this.showMoveDot = this.showMoveDot.map(item => false);
      // 设置透明度
      el.style.opacity = 1;
      // 监听小球动画结束方法
      el.addEventListener('transitionend', () => {
        el.style.display = 'none';
        this.listenInCart();
      })
      el.addEventListener('webkitAnimationEnd', () => {
        el.style.display = 'none';
        this.listenInCart();
      })
    },
    listenInCart () {
      // 拿到购物车的DOM添加class
      document.getElementById("buycar").classList.add('moveToCart');
      setTimeout(() => {
        // 500毫秒后移除class
        document.getElementById("buycar").classList.remove('moveToCart');
      }, 500);
    },
  },
  mounted () {
  },
  watch: {
    arr(val, oldVal){
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
           .after {
              position: absolute;
              right: 4px;
              bottom: 6px;
              font-size: 20px;
              color:#1AC694;
            }
        }
      }
    }
  }
  .move_dot {
    position: fixed;
    z-index: 100;
    top: 1rem;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    img {
      animation: 0.88s mymove ease-in-out;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
  @keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-moz-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-webkit-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
  @-o-keyframes mymove {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(0.6);
    }
    75% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(0.2);
    }
  }
</style>