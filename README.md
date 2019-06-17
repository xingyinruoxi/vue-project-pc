# vue框架开发文档

#### 一、技术选型
● 使用vue-cli3脚手架创建
● 核心使用 vue、vue-router
● less做为CSS预处理器
● element-ui做ui组件库
● 使用vuex做全局数据的状态管理
● axios进行网络请求
● vuex-along解决vuex数据页面刷新后初始化问题
● vue-i18n处理国际化

#### 二、框架目录结构
```
├─ node_modules       项目依赖模块 
├─ public             纯静态资源，不会被wabpack构建。
│  ├─ favicon.ico     网页图标
│  └─ index.html      html模板，入口页面
├─ src                项目源码目录
│  ├─ api             存放项目的网络模块，接口
│  |   ├─ index.js
│  |   └─ user.js
│  ├─ assets         资源目录，资源会被wabpack构建
│  |  ├─ img         图片存放目录
│  |  ├─ less        全局less
│  |  └─ libs        第三方库引用文件
│  ├─ components     公共组件目录
│  ├─ lang           国际化
│  |  ├─ locales
│  |  └─ index.js
│  ├─ router          前端路由
│  |   ├─ index.js    
│  |   └─ routes.js   
│  ├─ store            应用级数据（state）
│  |  ├─ modules
│  |  ├─ getters.js    获取state中的状态，仅单向获取数据，不做任何修改
│  |  └─ index.js
│  ├─ utils
│  |  ├─ crypt.js      加密/解密
│  |  ├─ filters.js    过滤
│  |  ├─ index.js       默认封装库
│  |  ├─ request.js     处理公共请求，响应数据
│  |  └─ token.js       token处理
│  ├─ views             前端页面文件
│  |  ├─ AboutPage
│  |  └─ HomePage
│  |     ├─componetns   页面子组件
│  |     └─ index.vue   页面入口组件  
│  └─ main.js 
│  ├─ App.vue           根组件
│  └─ main.js           入口js文件
│─ .gitignore           git的忽略配置文件
│─ babel.config.js      babel配置文件
│─ package.js           npm包配置文件，依赖包信息
│─ README.md            项目说明
│─ vue.config.js        修改webpack配置文件
└─ yarn.lock

```

### 三、css要求
● css用less写，.vue以局部less来写<style lang="less" scoped></style>只作用于当前vue文件
● 公共使用的less要单独放assets下less文件夹里

### 四、文件名要求
● 有意义的名词、简短、具有可读性
● 文件名采用短横线分割命名
● 页面文件夹命名主要以功能模块代表命名，并采用大写开头、驼峰法

### 五、js
● 使用严格的条件判断符。用 === 代替 == ，用 !== 代替 !=

### 六、文件格式
UTF-8格式

### 七、页面中id命名要求
除入口页外，一个页面就是一个Page，每个Page有唯一ID，该ID命名以模块名开头加一杠，以内容名结尾，如login-wrap

## 项目运行

```
# 安装依赖
npm install 或 yarn(推荐)
# 开启本地服务器localhost:8088
npm run dev
# 发布环境
npm run build

```
