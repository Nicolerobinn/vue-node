# 项目开发

## 1.初始化node项目

### 1.1搭建项目结构
推荐命令使用npm install
推荐下载宝塔集成,或者随便什么能开服务器的软件都可以
```bash
#在github上创建私有库项目vue-node，然后clone到本地
git clone  https://github.com/Nicolerobinn/vue-node.git
#创建node项目
全局安装express框架    npm install express -g

npm install -g express-generator  (为什么要有这一步呢)
        因为4.X版本，吧generator分离出 来了，需要单独安装
express apiLearn 生成项目
cd .\apiLearn\
npm install
npm start

文件目录
bin：存放可执行文件
node_modules：存放 package.json 中安装的模块，当你在 package.json 添加依赖的模块并安装后，存放在这个文件夹下
public：存放 image、css、js 等前端资源文件
routes：存放路由文件
views：存放视图文件或者说模版文件
app.js：启动文件，或者说入口文件
package.json：存储着工程的信息及模块依赖，当在 dependencies 中添加依赖的模块时，运行npm install ，npm 会检查当前目录下的
package.json，并自动安装所有指定的模块

#安装数据库
npm install mysql --save-dev
对数据库进行配置,配置在config文件夹下
#mysql连接线程池
common文件夹下basicConnection.js