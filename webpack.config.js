var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
const base = require("./webpack.config.base.js")
module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',  
    },
    mode:"development",
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            },
        ],
    }

}