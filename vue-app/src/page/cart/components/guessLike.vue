/* eslint-disable */
<template>
  <div class="like-content" >
     <div class="title" >
       猜你喜欢
     </div>
     <produceitem :arr="productList"/>
     <div class="bottom" >
       我也是有底线的
     </div>
  </div>
</template>
<script>
import produceitem from "../../home/components/home/produceitem";
import { Urls } from "@/utils/url";
import { get, post } from "@/utils/http";
export default {
  name: "guessLike",
  data() {
    return {
      productList:[]
    };
  },
  components: {
    produceitem
  },
  mounted() {
    this.getImg();
  },
  methods: {
    async getImg() {
      const query = await get(Urls.ddimg);
      let res = query.data.list
      this.productList =res[3].product_list;
    }
    }
};
</script>

<style lang="scss" scoped>
.title{
  padding: 10px 0;
  text-align: center;
}
.bottom{
  padding-top: 10px;
  text-align: center;
}
</style>