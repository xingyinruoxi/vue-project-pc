module.exports = {
    // 选项...
    devServer: {
        port: 3000, // 端口号
        proxy: {
            '/api': {
                target: 'http://www.****.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': '' //需要rewrite的,
                }
            },
        },

    },
};