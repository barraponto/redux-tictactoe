var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "gamux-tictactoe.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    target: "node",
    externals: [nodeExternals()],
    eslint: {
        configFile: path.join(__dirname, ".eslintrc.json"),
        failOnWarning: true,
        failOnError: true
    }
};
