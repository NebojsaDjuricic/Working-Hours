var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.join(__dirname, 'src'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [ {
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: ['es2015', 'react']
  },
   rules: [
     {
         test: /\.css$/,
         use: [ 'style-loader', 'css-loader' ]
       },
       {
         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
         loader: 'url-loader',
         options: {
           limit: 10000
         }
       }

  ]

  } ]

 }
}
