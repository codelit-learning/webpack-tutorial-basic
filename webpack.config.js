const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/a.js',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.csv$/,
                loader: 'csv-loader' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}