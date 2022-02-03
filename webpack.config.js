const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', // 3. Inject styles into DOM
                      'css-loader',  // 2. Turns css into common js
                      "sass-loader" // 1. Turns sass into css
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })]

}