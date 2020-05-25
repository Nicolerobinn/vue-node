# 初始化 vue 移动端项目

vue init webpack
创建项目结构文件夹 page util
page 放置页面
components 放置组件
router 负责路由
util 放置公共方法 url 等
assets 文件夹存放静态资源(css,img,font...)

# 该项目为生鲜电商类型项目,项目初期使用数据为 mock 数据

# ui 框架为 Vant

npm i vant -S
导入所有组件,不需要按需引入
相关资料 https://youzan.github.io/vant/#/zh-CN/quickstart
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

# 引入 sass

npm install node-sass --save-dev
npm install sass-loader --save-dev
相关资料 https://www.cnblogs.com/crazycode2/p/6535105.html

# 创建初始化 base.css 文件,在 app.vue 中引入

# 引入 vuex

相关资料 https://www.jianshu.com/p/cba77015cd47
npm install vuex --save

# router 中

对路由按需加载 我们这里使用的是 webpack 的语法 require.ensure
写入路由守卫,在以后用来做登录判断等功能

# rem 布局

util/rem.js 引入到 main.js 中
安装 postcss-pxtorem
npm install postcss-pxtorem -D

# 引入相关字体

在 assets/css/font 文件夹内放置字体

# 加入 mock.js axios，封装 mock xios

相关资料https://www.jianshu.com/p/c5568910e946

# 引入 better-scroll

相关资料 http://ustbhuangyi.github.io/better-scroll/doc/installation.html#npm
npm install better-scroll --save

# 引入 swiper
相关资料https://www.swiper.com.cn/
使用swiper来实现tab的滑动切换效果