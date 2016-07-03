module.exports = {
    entry: './main.js',
    output: {
         path: './',
         filename: 'index.js'
    },
    devServer: {
        inline: true, // reload on the fly.
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
