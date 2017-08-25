/**
 * Created by work on 2017/3/15.
 */

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    // target:'electron-main',
    // target:'node',
    target:'web',
    entry: {
        main: resolve('src/index.js'),
    },
    output: {
        filename: '[chunkhash].[name].js',
        path: resolve('dist'),
        chunkFilename:'[name].js',
        publicPath: "./"
    },
    // devtool:'inline-source-map',
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
                test:/\.pug$/,
                loader:'pug-loader'
            },
            {
                test:/\.scss/,
                loader:'sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
        }),
        new CleanWebpackPlugin([resolve('dist')]),
        new HtmlWebpackPlugin({
            title:'小猫钓鱼',
            jquery:'//cdn.bootcss.com/jquery/3.1.1/jquery.min.js',
            template:resolve('src/index.pug'),
            minify:{
                minifyJS:true,
            }
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'},
            {from:'src/sounds',to:'sounds'},
            {from:'src/gaming.js',to:'gaming.js'},
            {from:'src/start.js',to:'start.js'},
            {from:'src/end.js',to:'end.js'},
            {from:'src/lib/createjs-2015.11.26.min.js',to:'lib/createjs-2015.11.26.min.js'},
        ])
    ],
    externals: {
        'jquery':'jQuery',
    }
};
