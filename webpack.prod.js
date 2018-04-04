var path = require('path');
var webpack = require('webpack');

var common = require('./webpack.common.js');
var merge = require('webpack-merge');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    entry: {
        'bundle.min': './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                })
            },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/
        }),
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Bonk Leagues Skin Editor',
            favicon: 'src/img/logo.png',
            inject: false,
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                removeEmptyAttributes: true
            },

            template: require('html-webpack-template'),
            appMountId: 'app'
        })
    ]
});
