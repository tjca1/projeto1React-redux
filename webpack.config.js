const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 81,
        contentBase: './public'
    },
    module: {
        loaders:[{
           test: /.js?$/,
           loader: 'babel-loader',
           exclude: /node_modeles/,
           query: {
               presets:['es2015']
           }

        }]

    }
}