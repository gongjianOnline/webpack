var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'mian.js'
        filename:'[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack_top',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}