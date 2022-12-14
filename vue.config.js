module.exports = {

    baseUrl: process.env.NODE_ENV === 'development' ? '' : '/vue-template-explorer/',
    devServer:{
        port:9090
    }

}