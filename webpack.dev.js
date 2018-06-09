var path = require('path');
var webpack = require('webpack');

var common = require('./webpack.common.js');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    entry: {
        'bundle': './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.woff2?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: false,

            template: require('html-webpack-template'),
            appMountId: 'app'
        })
    ]
});
