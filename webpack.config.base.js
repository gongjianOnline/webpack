var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack_top',
            template: 'src/assets/index.html'
        }),
    ]
}