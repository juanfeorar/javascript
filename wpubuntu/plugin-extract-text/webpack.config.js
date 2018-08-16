const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aquí va los loaders
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    use: "css-loader"
                })
            }
        ]
    },
    plugins:[
        //aqui van los plugins
        new ExtractTextPlugin("css/styles.css")
    ]
}