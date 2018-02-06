let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let javascript = {
    entry: {
        'one': './src/one.js',
        'two': './src/two.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commonGround',
        }),
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};

// let styling = {
//     entry: {
//         'deps': './src/deps.js',
//     },
//     module: {
//         rules: [
//             { // css / sass / scss loader for webpack
//                 test: /\.(css|sass|scss)$/,
//                 use: ExtractTextPlugin.extract({
//                     use: ['css-loader', 'sass-loader'],
//                 }),
//             }
//         ],
//     },
//     plugins: [
//         new ExtractTextPlugin({filename:'main.css'}),
//     ],
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].js',
//     },
// }

module.exports = [
    javascript, styling
];
