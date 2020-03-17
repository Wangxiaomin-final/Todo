const path = require('path')//nodejs 的基本包 处理路径
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development'
const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'boundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),//new一个html-webpack-plugin实例
        new VueLoaderPlugin()
    ],
    mode: 'none'

}

if (isDev) {
    config.module.rules.push({
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }

            },
            'stylus-loader'
        ]
    })
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue'],

    },
        // ,
        //     new webpack.optimize.CommonsChunkPlugin({
        //         name: 'vendor'
        //     })
        // )
        config.optimization = {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0
                    },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    },
                    runtime: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'runtime',
                        priority: 10,
                        enforce: true
                    }
                }
            }
        },

        config.output.filename = '[name].[chunkhash]:8.js',

        config.module.rules.push({
            test: /\.styl/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            })
        }),
        config.plugins.push(
            // webPack 升级到 4.x导致
            // extract-text-webpack-plugin 无法使用
            // 使用md5:contenthash:hex:8替代
            new ExtractPlugin({
                filename: `style.[md5:contenthash:hex:8].css`,
            })

        )



}
module.exports = config


