var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    module: {
        loaders :[
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
};