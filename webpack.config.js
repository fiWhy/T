'use strict';

var webpack = require('webpack');
var path = require('path');
var fsExtra = require('fs-extra');


//Plugins
var webpackPluginHtml = require('html-webpack-plugin');
var webpackPluginCopy = require('copy-webpack-plugin');
var webpackExtractText = require('extract-text-webpack-plugin');


//ENV
var appEnv = process.env.NODE_ENV || 'development';


//PATHS
var appPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');


console.log(appPath);
console.log(appEnv);

var distFilenamePattern = '[name].[hash].js';

//IGNORE
var exclude = [/node_modules/, /\.test.js$/];

//Assets
var assetsPathPattern = '[path][name].[hash].[ext]';



//Config
var config = {

    context: appPath,

    entry: {
        app: 'app.js',
        vendor: [
            'angular',
            'angular-ui-router',
            'angular-material',
            'faker',
            'angular-material-data-table'
            // 'lodash'
        ]
    },
    plugins: [
        new webpackPluginHtml({
            filename: 'index.html',
            inject: 'body',
            template: 'app.html'
            //favicon: 'src/assets/images/favicon.ico'
        }),
        new webpackExtractText('[name].css')
    ],

    resolve: {
        // Enable resolving modules relative to these paths
        root: [appPath]
    },

    output: {
        // The bundling output directory (must be absolute path)
        path: distPath,
        // Set proper base URL for serving resources
        publicPath: '',
        // The output filename of the entry chunk, relative to `path`
        // [name] - Will be set per each key name in `entry`
        filename: distFilenamePattern
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    // Annotate Angular dependancy injection to support minification
                    'ng-annotate?single_quotes=true',
                    // Transpile ES6 into ES5
                    'babel'
                ],
                exclude: exclude
            },

            // Allow `require`ing SCSS files
            {
                test: /\.(css|scss)$/,
                loader: webpackExtractText.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap&includePaths[]=' + encodeURIComponent(appPath)
                )
            },

            // Allow `require`ing HTML files (Views) as raw strings
            // Also handles <img> `src` attributes (only static, dynamic `src` won't work)
            {
                test: /\.html$/,
                loader: 'html',
                exclude: exclude
            },

            // Allow `require`ing JSON files as objects
            {
                test: /\.json$/,
                loader: 'json',
                exclude: exclude
            },

            // Allow `require`ing image/font files (also when included in CSS)
            // Inline assets under 5kb as Base64 data URI, otherwise uses `file-loader`
            {
                test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)(\?.*)?$/i,
                loaders: [
                    'url?limit=5120&name=' + assetsPathPattern
                ]
            }
        ]
    },

    devServer: {
        contentBase: appPath,
        colors: true,
        inline: true,
        historyApiFallback: true
    }


};


module.exports = config;