# 初始化vue移动端项目
vue init webpack
创建项目结构文件夹page util
page 放置页面
components 放置组件
router 负责路由
util 放置公共方法 url等
assets文件夹存放静态资源(css,img,font...)
# 该项目为生鲜电商类型项目,项目初期使用数据为mock数据
# ui框架为Vant
npm i vant -S
导入所有组件,不需要按需引入
相关资料 https://youzan.github.io/vant/#/zh-CN/quickstart
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
# 引入sass
npm install node-sass --save-dev
npm install sass-loader --save-dev
相关资料 https://www.cnblogs.com/crazycode2/p/6535105.html
# 创建初始化base.css文件,在app.vue中引入
# 引入vuex
相关资料 https://www.jianshu.com/p/cba77015cd47
npm install vuex --save

# router中
对路由按需加载 我们这里使用的是webpack的语法require.ensure
写入路由守卫,在以后用来做登录判断等功能
