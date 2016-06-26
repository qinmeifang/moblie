var webpack = require('webpack');
var path = require('path');
var vue = require('vue-loader');

module.exports = {
    entry: {
        commenVue: ['vue','vue-touch', 'vue-router', 'vue-resource'],
        index: './src/js/index.js',
        proDetail: './src/js/proDetail.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=../images/[hash:8].[name].[ext]'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commenVue',  'commenVue.js')
    ]
//  resolve: {
//      root: path.resolve('./src/lib'),
//      alias: {
//          'utils': 'utils.js'
//      }
//  },
//  watch: true
}
