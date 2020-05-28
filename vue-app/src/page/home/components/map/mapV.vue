/* eslint-disable */
<template>
    <!-- 地图 -->
    <div v-show="show"  class="amap-page-container">
      <el-amap ref="map"
                vid="amapDemo"
                :plugin="plugin"
                :zoom="zoom"
                :center="center"
                class="amap-map"
                :events="events"
                >
        <el-amap-marker vid="component-marker"
                        :position="makerConf.position"
                        :content="makerConf.content" />
      </el-amap>
    </div>
</template>
<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: 'e0b7f36930009b7609dbbb773061fb13',
  // 插件集合所有的
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor',
    'AMap.Geolocation'
  ],
  uiVersion: '1.0',
  v: '1.4.4'
});
export default {
  name: "mapV",
  props:{
    show: {
      type: Boolean,
      default: true
    },
  },
  data() {
    var that = this;
    that.city = that.city || '上海';
    return {
      list: [],
      currIndex: 0,
      zoom: 16,
      center: [120.52, 30.40],
      events: {
        init: (o) => {
          o.setCity(that.city, result => {
            that.center = result;
            if (result && result.length > 0) {
              that.zoom = 16;
              that.makerConf.position = result;
              that.getList(result);
            }
          });
          // Map UI优化
          this.$nextTick(() => {
            //去掉logo
            document.getElementsByClassName("amap-logo")[0].style.display = "none";
            // 去掉版权信息
            document.getElementsByClassName('amap-copyright')[0].style.opacity = "0";
            // 修改搜索结果框的宽度
            // document.getElementsByClassName('search-tips')[0].style.width = '60%';
            // 隐藏比例尺
            document.getElementsByClassName('amap-scalecontrol')[0].style.visibility = "hidden";
            // 修改定位当前位置
            document.getElementsByClassName('amap-geolocation-con')[0].style.left = "85%";
          })
        },
        // 拖拽
        "dragend": function (e) {
          var point = this.getCenter();
          var pos = [point.lng, point.lat];
          that.makerConf.position = [point.lng, point.lat];
          that.getList(pos);
        },
      },
      makerConf: {
        position: [120.52, 30.40],
        content: ""
      },
      searchOption: {
        city: that.city,
        citylimit: true
      },
      plugin: [
        'Scale',
        {
          enableHighAccuracy:true,
          convert: true, 
          pName: 'Geolocation',
          zoomToAccuracy:true,
          events: {
            init (o) {
              // 获取当前位置
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  that.$nextTick();
                }
              });
            },
            complete(result) {
              //定位成功
              var address = result.formattedAddress
              var point = result.position;
              var obj = {
                address: address,
                name: "",
                location: point
              }
              that.makerConf.position = [point.lng, point.lat];
              that.getList([point.lng, point.lat]);
            },
            error: function () {
            }
          }
        }
      ]};
  },
  methods: {
          // 获取位置列表
        getList(result) {
          //获取列表
          var that = this;
          that.$Geocoder({
            lnglatXY: result,
            success(res) {
              if (res.regeocode && res.regeocode.pois) {
                that.list = res.regeocode.pois;
              } else {
                that.list = [];
              }
            },
            error (res) {
              that.list = [];
            }
          });
        },
        // 搜索结果
        onSearchResult (pois) {
          let latSum = 0;
          let lngSum = 0;
          var that = this;
          var mymap = that.$refs.map.$$getInstance();
          if (pois && pois.length > 0) {
            //如果长度为1则无需转化
            var poi = pois[0];
            var lng = poi["lng"];
            var lat = poi["lat"];
            that.center = [lng, lat];
            that.makerConf.position = [lng, lat];
            that.makerConf.content = poi.name;
            that.list = pois;
          } else {
            that.list = [];
          }
        },
        //将坐标点转化为，详细地址
        $Geocoder (options) {
          options = options || {};
          if (AMap) {
            AMap.plugin(['AMap.Geocoder'], () => {
              const geocoder = new AMap.Geocoder({
                radius: options.radius || 1000,
                extensions: options.extensions || "all"
              })
              var lnglatXY = options.lnglatXY || [114.397169, 30.50576]; //已知点坐标
              geocoder.getAddress(lnglatXY, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  options.success && options.success(result);
                } else {
                  options.error && options.error(status, result);
                }
              });
            });
          }
        },
    },
    watch: {
      list(val, oldVal){
        console.log(val)
          this.$emit('callBackSetMapList',val);
      },
    },
};
</script>

<style lang="scss" scoped>
$height :176px;
#map {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: #f5f5f5;
  .adrs {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: calc(100vh);
    .title {
      color: black;
      font-size: 10px;
      font-family: SourceHanSansCN-Bold;
      span{
        color:#3bba63 ;
      }
    }
    .subTitle {
      color: grey;
      font-size:10px;
    }
    .nearLists {
      padding: 8px;
      line-height: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      border: none;
      width: 100%;
        &:after {
          left: 0;
          content: "";
          position: absolute;
          bottom: 0;
          background: rgba(9, 20, 31, 1);
          width: 100%;
          height: 1px;
          -webkit-transform: scaleY(0.2);
          transform: scaleY(0.2);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
        }
    }
    ul li.active {
      color: deeppink;
    }
  }
  .amap-page-container {
    margin-top: 10px;
    height: $height;
  }
  .amap-map {
    height: $height;
  }
  .amap-geolocation-con {
    bottom: 2rem !important;
    z-index: 100 !important;
  }
}
</style>
