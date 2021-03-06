path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        Barrow: "./src/index-Barrow.js",
        FM: "./src/index-Fm.js",
        Historia: "./src/index-historia.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/Html/index.html",
        filename: "index.html",
        chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/Html/Barrow.html",
        filename: "Barrow.html",
        chunks: ["Barrow"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/Html/FM.html",
        filename: "Fm.html",
        chunks: ["FM"]
    }),
    new HtmlWebpackPlugin({
        template: "./src/Html/Historia.html",
        filename: "Historia.html",
        chunks: ["Historia"]
    })],
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, 
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"] },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    },
                ],
            },
            { 
                test: /\.js$/, 
                loader:"babel-loader",
                exclude:/(node_modules)/,
            },
        ],
    },


}