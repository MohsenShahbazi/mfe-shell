const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 7000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                remote1: 'remote1@http://localhost:7001/remoteEntry.js',
                remote2: 'remote2@http://localhost:7002/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
