const { Server } = require('./middleware')
const { FacadeRestApi } = require('./facade');
const { BizBase } = require('./biz')

module.exports = {
    Middlewares: {
        Server,
        FacadeRestApi
    },
    BusinessObjects: {
        BizBase
    }
}