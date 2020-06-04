/* eslint-disable */
<template>
    <div class="card"  >
        <div  class="card-content">
            <van-checkbox @click="click(list.id)" v-model="checked" />
            <div class="card-content-left" >
                <div  class="van-image" style="width: 100%; height: 100%;">
                    <img :src="list.smallImage" class="van-image__img" style="object-fit: cover;">
                </div>
            </div>
            <div  class="card-content-right" >
                <div class="content-top"  >
                    <div  class="van-card__title van-multi-ellipsis--l2">{{list.name}}</div>
                </div>
                <div  class="content-bottom">
                    <div  class="van-card__price">
                        <span>{{list.price | moneyFormat}}</span>
                    </div>
                    <van-stepper button-size="20px"  :value="value" @minus="minus"   @overlimit="overlimit" @plus="plus"  disable-input />
                </div>
                </div>
        </div>
    </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { moneyFormat } from '@/filter'
  export default {
    name: "card",
    props: ["list"],
    data() {
      return {
        value:0,
        checked:false
      };
    },
    mounted(){
      this.value = this.list.num
      this.checked = this.list.checked
    },
    methods: {
      ...mapMutations(['ADD_TO_CART','SINGLE_SELECT_GOODS','DELETE_PRESENT_GOODS','REDUCE_GOODS']),
        overlimit(){
            this.$dialog({message: '确定删除该商品吗？',showCancelButton:true}) .then(() => {
              this.DELETE_PRESENT_GOODS(this.list.id)
            })
            .catch(() => {
              // on cancel
            })
        },
        plus(){
            this.ADD_TO_CART(this.list)
            this.$toast.loading({
              forbidClick: true,
              loadingType: 'spinner',
            });
        },
        minus(){
            this.REDUCE_GOODS({goodsID:this.list.id})
        },
        click(id){
          this.SINGLE_SELECT_GOODS({goodsID:id})
        }
    }
  };
</script>

<style lang="scss" scoped>
  .card{
    padding: 8px;
    .card-content{
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 60px;
      .van-checkbox{
        margin-right: 10px;
      }
      .card-content-left{
            position: relative;
            -webkit-box-flex: 0;
            -webkit-flex: none;
            flex: none;
            height: 60px;
            width: 60px;
            margin-right: 8px;
            display: flex;
      }
      .card-content-right{
              position: relative;
              display: -webkit-box;
              display: -webkit-flex;
              display: flex;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              flex-direction: column;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              justify-content: space-between;
              min-width: 0;
              min-height: 60px;
              .content-bottom{
                line-height: 20px;
                .van-card__price{
                      vertical-align:bottom;
                }
                .van-stepper{
                  float: right;
                }
              }
      }
    }
  }
</style>