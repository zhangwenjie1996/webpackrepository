var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var openBrowserPlugin=require('open-browser-webpack-plugin')
var extractTextPlugin=require('extract-text-webpack-plugin')
var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js?[hash:6]'
    },

    // devServer:{
    //     contentBase:'dist',
    //     inline:true,
    //     port:8080,
    //     stats:{
    //         colors:true
    //     }
    // },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // loader: 'style!css',
                 loader: extractTextPlugin.extract("style","css","less"),
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
        new extractTextPlugin("styles.css"),
        new openBrowserPlugin({
            url:'http://localhost:8080'
        })
    ]

}

module.exports = config