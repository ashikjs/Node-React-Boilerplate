
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "./src"),
    entry: "../src/index.js",
    // mode: "development", // enabled useful tools for development
    // entry: [
    //     "webpack-dev-server/client?http://127.0.0.0:8080",
    //     "webpack/hot/only-dev-server",
    //     "../src/index.js"
    // ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)$/i,  // a regular expression that catches .js files
                exclude: /node_modules/,
                loader: 'url-loader',
            },
            {
                test: /\.(js|.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ["env","react"],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            }
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         {
            //             loader: "css-loader",
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules",
        ]
    },
    output: {
        path: __dirname + "/public/",
        // publicPath: "/public/",
        filename: "build.js"
    },
    devServer: {
        port: 8080, // most common port
        contentBase: './public',
        inline: true,
        historyApiFallback: true,
    }
};