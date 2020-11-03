import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { TsConfigPathsPlugin } from 'awesome-typescript-loader'

const config: webpack.Configuration = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    entry: './src/index.ts',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'frontend typescript jest template'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.s[ac]ss$/, use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]},
            { test: /\.(png|jpg|svg|gif)$/, use: 'file-loader'}
        ]
    },
    devServer: {
        stats: {
            assets: false,
            hash: false,
            chunks: false,
            errors: true,
            errorDetails: true,
        },
        overlay: true
    }
}

export default config;