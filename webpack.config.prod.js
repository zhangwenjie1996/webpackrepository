var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin') 
var uglifyPlugin=webpack.optimize.UglifyJsPlugin

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '搭建前端工作流',
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new uglifyPlugin({
            compress:false
        }),
        new webpack.BannerPlugin('作者：张雯洁\n日期:2016-12-14\n协议：MIT\n版本:0.39\nCopyright:me')
    ]

}

module.exports = config