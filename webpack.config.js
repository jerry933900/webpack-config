// 导入path模块
const path = require("path");
// 引入插件
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 4.x使用的分离插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 自动生成html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口
  entry: "./src/index.js",
  //   出口
  output: {
    // 文件名
    filename: "main.js",
    // 路径
    path: path.resolve(__dirname, "dist")
  },
  // 静态资源服务器的目录
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  // 注册插件
  plugins: [
    // new ExtractTextPlugin("styles.css"),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ]
};
