export var CartDetail = {
  methods: {
    // 商品详情页面
    goToGoodsDetail(cart) {
      // 跳转到商品详情页面并且传值
      this.$router.push({
        name: "cartDetail",
        query: {
          id: cart.id,
          name: cart.name,
          small_image: cart.small_image,
          price: cart.price,
          spec: cart.spec,
          total_sales: cart.total_sales,
          origin_price: cart.origin_price
        }
      });
    }
  }
};
