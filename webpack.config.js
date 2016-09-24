var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "gamux-tictactoe.js"
    },
    module: {
        loaders: [
        ]
    },
    target: "node",
    externals: [nodeExternals()]
};
