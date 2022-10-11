const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  mode: "development",
  devtool:'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "the first title",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ],
  output: {    
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',    
    clean:true
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),  
    open: true,
    compress: true,
    port: 9000,
  },
  module:{
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:['babel-loader']
        },
        {
          test:/\.(ico|jpg|png|gif|jpeg)$/,
          type:'asset/resource'
        },
        {
          test:/\.(css|scss)$/,
          use:['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test:/\.(woff|woff2|eot|ttf|otf)$/i,
          type:'asset/resource'
        }
      ]
  }
};