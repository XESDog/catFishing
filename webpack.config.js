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

module.exports = {
    // target:'electron-main',
    // target:'node',
    target: 'web',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
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
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title: '小猫钓鱼',
            version: version,
            jquery: '//cdn.bootcss.com/jquery/3.1.1/jquery.min.js',
            template: './src/index.pug',
            minify: {
                minifyJS: true,
            }
        }),
        // new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {from: 'src/images', to: 'images'},
            {from: 'src/sounds', to: 'sounds'},
            {from: 'src/gaming.js', to: 'gaming.js'},
            {from: 'src/start.js', to: 'start.js'},
            {from: 'src/end.js', to: 'end.js'},
            {from: 'src/preload.js', to: 'preload.js'},
            {from: 'src/css/base.css', to: 'css/base.css'},
            {from: 'src/lib/createjs-2015.11.26.min.js', to: 'lib/createjs-2015.11.26.min.js'},
        ])
    ],
    externals: {
        'jquery': 'jQuery',
    }
}
