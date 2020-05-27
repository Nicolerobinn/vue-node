/* eslint-disable */
<template>
 <div>
 </div>
</template>
<script>
  export default {
    name: "Merchandise",
    data() {
      return {
        title:'',
        isBack:false,
      };
    },
    created(){
        const str = this.$route.query.val
        this.getProduct(str)
    },
    components:{
    },
    methods: {
        getProduct(str){
        }
    },
    mounted() {
    },
  };
</script>

<style lang="scss" scoped>
</style>