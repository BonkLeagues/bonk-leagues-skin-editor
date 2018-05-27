var path = require('path');
var webpack = require('webpack');

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

    Bonk Leagues Skin Editor v1.1

    Copyright (C) 2018 its_magic, Finbae
                        oh, and Dionysus

    Welcome to the land of code! We hope
    you enjoy your stay.              :)
`;

module.exports = {
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
                test: /\.([ot]tf|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
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
        new webpack.BannerPlugin({
            banner: banner,
            entryOnly: true
        })
    ]
};
