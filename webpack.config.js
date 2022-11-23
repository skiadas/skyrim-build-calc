const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => ({
    mode: 'development',
    context: path.join(__dirname, 'app'),
    entry: {
        app: './js/app.tsx',
        styles: './css/main.pcss'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[contenthash:8].js',
        publicPath: './',
        pathinfo: false
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.p?(css)$/i,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                    sourceMap: env.production !== true,
                                    importLoaders: 1,
                                    modules: {
                                        localIdentName: '[local]_[hash:base64:5]'
                                    }
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: env.production !== true
                                }
                            }
                        ]
                    },
                    {
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                    sourceMap: env.production !== true,
                                    importLoaders: 1,
                                    modules: false
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: env.production !== true
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: env.production === true ? '[name].[contenthash:8].css' : '[name].css',
            chunkFilename: env.production === true ? '[name].[contenthash:8].css' : '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.html'),
            inject: 'body'
        })
    ]
});
