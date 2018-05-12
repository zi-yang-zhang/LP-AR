'use strict'


import htmlWebpackPlugin from 'html-webpack-plugin'


// loaders配置
var getLoaders = (env) => {
    return [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|vendor)/,
        loader: 'babel'
    }, {
       //处理.vue文件
        test: /\.vue$/,
        loader: 'vue-loader'
    }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
    }, {
        test: /\.less$/,
        loader: 'less-loader'
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
    }];
};


let getPlugins = ()=>


module.exports = {
  // 这是一个入口文件
  entry: './src/app.js',
  // 编译后的文件路径
  output: {
    //`dist`文件夹
    path: './dist',
    // 文件 `build.js` 即 dist/build.js
    filename: 'build.js'
  },
  plugins: [new htmlWebpackPlugin({
              template: './src/index.html',
              hash: true
          })],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          // 不符合Eslint规则时只警告(默认运行出错)
          // emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      },
    ],
    loaders: getLoaders()
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  devtool: 'source-map',
  resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}
}
