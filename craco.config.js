const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = pathUrl => path.join(__dirname, pathUrl);


module.exports = {
    webpack: {
        alias: {
            '@': resolve('src')
        }
    },
    devServer: {
        port: 80,
        hot: true,
        proxy: {
            "/api": {
                "target": "https://api.github.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/api" : ""
                },
            }
        }
    },
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ]
};