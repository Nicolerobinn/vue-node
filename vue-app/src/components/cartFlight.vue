<template>
    <div>
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
import {moneyFormat} from '@/filter'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'cartFlight',
  props:['dropImage','showMoveDot','elLeft','elTop'],
  components: {

  },
  data () {
    return {
    }
  },
  methods: {
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
    //   this.showMoveDot = this.showMoveDot.map(item => false);
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
}
</script>

<style lang="scss" scoped>
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