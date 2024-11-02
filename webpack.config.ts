import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
const config: Configuration = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html', 
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        open: true,
        hot: true,
    } as DevServerConfiguration,
};

module.exports = config;
