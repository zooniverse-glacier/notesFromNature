var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    publicPath = path.join(__dirname, 'public'),
    nodeModules = path.join(__dirname, 'node_modules'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    env = process.env.NODE_ENV;
console.log(env);

module.exports = {
    target: 'web',
    cache: true,
    entry: path.join(srcPath, 'index.jsx'),
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: publicPath,
        filename: 'nfn.js',
    },
    module: {
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object -- TODO Remove jQuery & bootstrap
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.jsx$/,  loaders: ['react-hot', 'babel-loader'], exclude: [nodeModules]},
            { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
            //{ test: /\.css$/,  loader: "style-loader!css-loader" },
            //{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            //{ test: /\.png$/,  loader: 'url-loader?mimetype=image/png' },
            //{ test: /\.jpg$/,  loader: 'file-loader' },
            { test: /\.ttf$/,  loader: "file-loader" },
            { test: /\.eot$/,  loader: "file-loader" },
            { test: /\.svg$/,  loader: "file-loader" },
            { test: /\.woff2?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        //TODO: This needs to become index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'crabs.html'),
            filename: 'crabs.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    //debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {contentBase: './public', historyApiFallback: true}
};
