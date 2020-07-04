const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        liveReload: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        esModule: false
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false,
                            reloadAll: true

                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    }
}