var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },

    module: {
        loaders: [
            // transform ES6 to ES5
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: path.resolve(__dirname, 'src/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            // LESS
            // style-loader: add css files into DOM
            // css-loader: add css files into the JS files
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}
