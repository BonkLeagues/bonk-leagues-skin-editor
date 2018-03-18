var path = require('path');
var webpack = require('webpack');

var CompressionPlugin = require('compression-webpack-plugin');

var banner = `
       \`:+osssso/-
    \`/ssssssssssss:
   .ssssssssssssssso
   ossssssssssssssss:         \`/:
   sssssssssssssssss/       \`/ss\`
   /ssssssssssssssss-     .+sss:
    +ssssssssssssss:    -osssss\`
     -+ssssssssss/\`   -ossssss:
       \`-:////:.   \`:soossssss\`
                 \`/ss.   .sss:
               \`/ssso     oss
              .+ssssso/:/oss:
                 \`-:+sssssss
                      \`.:+o:

    Bonk Leagues Skin Editor v1
    (c) its_magic, Finbae, Discoli
           oh and Dionysus I guess

    Welcome to JavaScript land! We
    hope you enjoy your stay.   :)
`;

module.exports = {
    entry: {
        'bundle': './js/app.js',
        'bundle.min': './js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-1', 'stage-2'],
                        plugins: [
                            ['transform-decorators-legacy']
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader'
                ]
            },
            { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
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
        new webpack.BannerPlugin(banner)
    ]
};
