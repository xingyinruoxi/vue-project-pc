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
● css用less写，.vue以局部less来写<style lang="less" scoped></style>只作用于当前vue文件。
● 公共使用的less要单独放assets下less文件夹里。
● 使用 scoped关键字，约束样式生效的范围。
● 避免使用标签选择器（效率低、损耗性能）。
● 非特殊情况下，禁止使用 ID 选择器定义样式。有 JS 逻辑的情况除外。
● LESS 属性书写顺序：先决定定位宽高显示大小，再做局部细节修饰！推荐顺序：定位属性(或显示属性，display)->宽高属性->边距属性(margin, padding)->字体，背景，颜色等，修饰属性的定义。


### 四、文件名要求
● 有意义的名词、简短、具有可读性
● 文件名采用短横线分割命名
● 页面文件夹命名主要以功能模块代表命名，并采用大写开头、驼峰法

### 五、js
● 组件名称：必须以大写字母开头驼峰法命名。
● Data必须是一个函数。
● 调试信息 console.log() debugger使用完及时删除。
● 为v-for设置Key值。
● 使用计算 规避v-if和v-for用在一起。
● 特殊情况不允许使用原生API操作dom,谨慎使用this.$refs直接操作dom。
● 使用ES6风格编码源码,定义变量使用let,定义常量使用const,使用export,import模块化。
● 指令缩写：都用指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)。
● 使用 data 里的变量时请先在 data 里面初始化。
● 函数中统一使用_this=this来解决全局指向问题。
● 能用单引号不用双引号。
● 使用严格的条件判断符。用 === 代替 == ，用 !== 代替 !=。
● 声明变量必须赋值。

### 六、文件格式
● UTF-8格式

### 七、文件夹、组件命名规范，组件结构规范
● **文件夹**：文件夹名称应统一格式，小写开头，见名思意，views页面下的文件夹名称统一以Page结尾，例如：       HomePage,LoginPage。其余文件夹名称统一按照项目结构目录命名规范统一命名;
● **组件**：1、组件名以单词大写开头，当多个单词拼写成的组件时，采用驼峰式命名规则。一般是多个单词全拼，减少简写的情况，这样增加可读性; 2、组件应该都放到components文件夹下，单个页面独立一个文件夹，用来放相对应的vue文件以及页面相关的样式文件，样式少可直接写到页面组件里边，这样更符合组件化的思想
● **组件结构**：遵循从上往下template，script，style的结构

### 八、Template模板文件
● 尽量使用以.vue结束的单文件组件，方便管理，结构清晰。
● 标签语义化，避免清一色的div元素，尽量用h5语义化标签，例：header、footer、section、aside等。
● 样式class的命名：统一以小写字母开头，小写字母、中划线和数字组成。命名中尽量避免使用中文拼音，应该采用更简明有语义的英文单词进行组合。不建议使用驼峰法命名class属性。使用中划线的目的是为了和第三方库中的命名冲突。例如：xx-left,xx-line
● 多特性，分行写，提高可读性。即一个标签内有多个属性，属性分行写。
● 自定义标签：使用自闭标签的写法。例如：，如果自定义标签中间需要传入slot，则写开始标签和结束标签，结束标签必须加/。
● 组件/实例选项中的空行。便于阅读和代码架构清晰。

### 九、注释规范
注意在注释的前后各有一个空格。
1、 CSS注释：/* write your HTML comment! */。
2、Stylus注释：
a)	单行注释：// 我是less注释，和js的单行注释一样，在css中不输出
b)	多行注释

```
/*
* less的多行注释，只有在compress选项未启用的时候
* 才会被输出
*/
```

c)	多行缓冲注释：

```
/*！
* less的多行缓存注释, Stylu压缩的时候这段代码无视
*/
```

3、JS注释：
a)	行级注释（注意//后面空格）：// 正确的注释
b)	变量声明注释：如果是在类似 Vue 项目的 data 属性中的变量，直接用行级样式跟在后面。例：rightExample: ‘yes’, // 注释直接写这里
c)	如果是在类，构造函数，或者常量定义中的变量，使用块级注释。
```
/*
* 错误码常亮定义
* @type {number}
*/
```
d)	函数声明注释：不必要在每一个函数都写注释，但是在公共函数，还是建议补全注释，让后面的人不需要重复早轮子。
e)	复杂的业务逻辑处理说明、特殊情况的代码处理说明，对于特殊用途的变量、存在临界值、使用了某种算法思路进行注释说明



```
## 项目运行

```
# 安装依赖
npm install 或 yarn(推荐)
# 开启本地服务器localhost:8088
npm run dev
# 发布环境
npm run build

```
