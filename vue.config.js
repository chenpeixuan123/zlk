const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    publicPath: './',
    outputDir:'dist',
    assetsDir:'static',
    css: {
        extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
    },

    configureWebpack: (config)=>{
        // vue骨架屏插件配置
        config.plugins.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app: path.join(__dirname, './src/utils/skeleton.js'),
                },
            },
            minimize: true,
            quiet: true,
            router:{
                mode:'hash',
                path:'aboutHX',
                skeletonId:'Skeleton1'
            }
        }))
    },
    pwa: {
        iconPaths: {
            favicon32     : 'login.ico',
            favicon16     : 'login.ico',
            appleTouchIcon: 'login.ico',
            maskIcon      : 'login.ico',
            msTileImage   : 'login.ico'
        }
    }
}