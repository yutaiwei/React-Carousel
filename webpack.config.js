var path = require('path');
var Html=require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './build',
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: 'node_modules'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(woff|woff2|svg|jpg|png)/,
                loader:'url-loader'
            }
        ]
    },
    plugins: [
        new Html({
            template:'./src/index.html'
        })
    ]
};