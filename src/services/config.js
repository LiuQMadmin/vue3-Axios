const GET = (config) => {
    return {
        url: config.url,
        method: config.method,
        params: {
            ...config.data,
            key: JUHE_APPKEY
        },
        success,
        fail
    }
}