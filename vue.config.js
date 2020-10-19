module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/api": {
                target: "http://v.juhe.cn/",
                changeOrigin: true,
                ws: true,
                source: false, // http检查
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    lintOnSave: false
}