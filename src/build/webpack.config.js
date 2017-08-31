/**
 * Created by work on 2017/3/15.
 */

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dateFormat = require('dateformat');
const now = new Date();
const version = `version:${dateFormat(now, 'yyyy-m-d-H-M-s')}`

function resolve(str) {
    return path.resolve('../../', str)
}

module.exports = {
    // target:'electron-main',
    // target:'node',
    target: 'web',
    entry: {
        main: resolve('src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        chunkFilename: '[name].js',//content.json->content.js
        publicPath: "./",
        sourceMapFilename: "map/[file].map"
    },
    // devtool:'inline-source-map',
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }

            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.scss/,
                loader: 'sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        // new CleanWebpackPlugin([path.resolve('dist')]),
        new HtmlWebpackPlugin({
            title: '小猫钓鱼',
            version: version,
            jquery: '//cdn.bootcss.com/jquery/3.1.1/jquery.min.js',
            template: resolve('src/index.pug'),
            minify: {
                minifyJS: true,
            }
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {from: resolve('src/images'), to: 'images'},
            {from: resolve('src/sounds'), to: 'sounds'},
            // {from: resolve('src/css/base.css'), to: 'css/base.css'},
            {from: resolve('src/lib/createjs-2015.11.26.min.js'), to: 'lib/createjs-2015.11.26.min.js'},
        ])
    ],
    externals: {
        'jquery': 'jQuery',
    }
}
