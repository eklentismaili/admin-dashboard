const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', // 3. Inject styles into DOM
                      'css-loader',  // 2. Turns css into common js
                      "sass-loader" // 1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })]
}