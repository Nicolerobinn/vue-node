export var CartMixin = {
    data () {
      return {
        showMoveDot: [], //控制下落的小圆点显示隐藏
        elLeft: 0, //当前点击购物车按钮在网页中的绝对top值
        elTop: 0, //当前点击购物车按钮在网页中的绝对left值
        dropImage: ''
      }
    },
    methods:{
        addToCart (product, num) {
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
    }
  };