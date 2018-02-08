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

var production = process.argv.indexOf('-p')>-1;

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        new webpack.BannerPlugin(banner)
    ],
    // resolve: {
    //     alias: {
    //         'react': 'preact-compat',
    //         'react-dom': 'preact-compat'
    //     }
    // },
    watch: process.argv.indexOf('-w')>-1
};
