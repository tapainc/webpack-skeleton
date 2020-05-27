const merge = require('webpack-merge');
const common = require("./webpack.common");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
});