# officialwebsite

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 执行 npm install vue-style-loader css-loader sass-loader --save-dev 安装了css相关依赖之后，npm run dev，项目报错：TypeError: this.getResolve is not a function
``` bash
解决方法：
把项目package.json文件中sass-loader版本改为7.3.1。执行命令，重新安装项目依赖：
npm install
```
