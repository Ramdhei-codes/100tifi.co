const path = require('path')
//nos permite saber donde nos encontramos en las carpetas.
//ya sea en local o en la nube

const HtmlWebpackPlugin = require('html-webpack-plugin')
// plugin necesario para trabajar con HTML


//Módulo donde se encuentra toda la configuración de lo que
//va a suceder

/**
 * Módulo donde se encuentra toda la configuración de lo que
 * va a suceder
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
}