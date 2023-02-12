const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": './src/index.js',
    "output": {
        "path": __dirname + '/dist',
        "filename": "app.js"
    },
    devServer: {
        static: './dist',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
}