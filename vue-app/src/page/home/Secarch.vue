/* eslint-disable */
<template>
  <div>
    <form action="/">
      <van-search v-model="value" show-action :placeholder="placeholder" @search="setSearch" @cancel="onCancel" />
      <div class="history-box" v-if="arr.length>0" >
         <div class="history-search" > <span>历史搜索</span>  <van-icon @click="removeSearch" name="delete" /></div>
         <div class="list" >
            <div v-for="(e,i) in arr" :key="i" @click="setSearch(e)" >
              {{e}}
            </div>
         </div>
      </div>
      <div class="search-find">
         <div class="history-search" > <span>搜索发现</span> </div>
         <div class="list " :class="{maxheight:findarrshow}" >
            <div v-for="(e,i) in listArr" :key="i" @click="setSearch(e)"  >
              {{e}}
            </div>
            <div v-if="!findarrshow" @click="findArrShow()" ><van-icon name="arrow-down" /></div>
         </div>
      </div>
    </form>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  import {getLocalStore,setLocalStore , removeLocalStore} from '@/utils/common'
  export default {
    name: "Secarch",
    data() {
      return {
        value: '',
        placeholder: '强儿爱吃大菠萝',
        arr:[],
        listArr:['鸡蛋','牛奶','黄瓜','鸡蛋','牛奶','黄瓜','鸡蛋','牛奶','黄瓜'],
        findarrshow:false
      };
    },
      created(){
        this.getSearch()
        },
    methods: {
        getSearch(){//获取数组
          const arr =  getLocalStore('SECARCH_ARR')
          if(arr  ){
            this.arr  =   JSON.parse(arr)
          }
        },
        setSearch(val) {//设置数组
          let listArr =  this.arr
          const index = listArr.indexOf(val) //判断元素是否在数组中已经存在
          if(index>-1){//如果元素存在就删除元素
             listArr.splice(index, 1);
          }
          let arr = [val,...listArr]
          setLocalStore('SECARCH_ARR',arr)
          this.getSearch()
          this.$router.replace(
            {
              path:'merchandise',
              query:{
                val
              }
            }
          );  // 不会记录路由，回退的话，是回退不到上一个页面，适合单页面的切换；
        },
        removeSearch(){//删除数组
          removeLocalStore('SECARCH_ARR')
          this.arr=[]
        },
        onCancel() {
          this.$router.back(-1)
        },
        findArrShow(){
          this.listArr = [...this.listArr,'牛奶','香蕉','菠萝','牛奶']
          this.findarrshow = true
        }
    },
  };
</script>

<style lang="scss" scoped>
  .van-search__content {
    border-radius: 20px;
  }
  .history-box,.search-find{
     padding: 5px 13px;
     overflow: hidden;
    .history-search{
      margin-bottom: 4px;
      span{
        font-family: SourceHanSansCN-Bold;
      }
      .van-icon-delete{
        line-height: 14px;
        float: right;
      }
    }
    .list{
      max-height: 75px ;
      overflow: hidden;
        div{
        float: left;
        padding: 8px 10px;
        margin:0 10px 10px 0;
        background-color: #f2f2f2;
        border-radius: 4px;
      }
    }
    .maxheight{
       max-height: 150px ;
    }
  }
</style>