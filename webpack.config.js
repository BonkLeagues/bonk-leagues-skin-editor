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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-1', 'stage-2'],
                    plugins: [
                        ['transform-decorators-legacy']
                    ]
                }
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
