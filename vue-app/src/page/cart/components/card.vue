/* eslint-disable */
<template>
      <div class="swiper-container">
        <div class="swiper-wrapper" ref="viewBox">
          <div class="swiper-slide" >
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
          </div>
          <div class="swiper-slide " @click="deleteProduct" >
            <span >删除</span>
          </div>
        </div>
      </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import { moneyFormat } from '@/filter'
  import Swiper from "swiper"
  import "swiper/css/swiper.css";
  export default {
    name: "card",
    props: ["list"],
    data() {
      return {
        value:0,
        checked:false,
        width:window.innerWidth-window.innerWidth*.1,
        textPositionRight:window.innerWidth*.2,
      };
    },
    mounted(){
        this.initSwiper()
    },
    activated(){
        this.initSwiper()
    },
    watch:{
      list:{
         handler(old){
            this.value = old.num
            this.checked = old.checked
         },
         deep: true,
    　　 immediate:true,

      }
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
        deleteProduct(){
              this.DELETE_PRESENT_GOODS(this.list.id)
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
        },
        initSwiper() {
          const that = this
          console.log('开始渲染')
          this.mySwiper = new Swiper('.swiper-container', {
              slidesPerView: 'auto',
              resistanceRatio:.95,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            on:{
              touchMove(event){
                that.compare()
              }
            },
          });
        },
        compare(){
          if(this.$refs.viewBox){
            let transformX =  this.getMatrix(this.$refs.viewBox).x
            if(transformX<0&& Math.abs(transformX)>this.width){
              this.deleteProduct()
            }
          }
        },
        getMatrix(element) {
            const values = element.style.transform.split(/\w+\(|\);?/);
            const transform = values[1].split(/,\s?/g).map(e=>parseInt(e))
            return {
              x: transform[0],
              y: transform[1],
              z: transform[2]
            };
        }
    }
  };
</script>

<style lang="scss" scoped>
   @import '@/assets/css/mixin.scss';
  .card{
      padding: 8px;
    .card-content{
      @include display-flex;
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
              @include display-flex;
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
  .swiper-slide {
      &:nth-child(2n){
        width: 20%!important;
        background-color: skyblue;
        text-align: center;
        height: 86px;
        line-height: 80px;
        color: #fff;
        span{
          position: absolute;
          top: 50%;
          width: 100%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        &::after{
          content: "";
          position: absolute;
          height: 100%;
          width: 500%;
          background-color: skyblue;
          left: 100%;
          top: 0;
        }
      }
  }
</style>