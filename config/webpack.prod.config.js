const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const productionConfiguration = {
    plugins: [
        new CleanWebpackPlugin('dist', { root: path.resolve(__dirname, '..'), verbose:  true }),
        new CopyWebpackPlugin([{  // copy assets to public folder
            from: path.resolve(__dirname, '..', 'src', 'public')
        }])
    ]
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
