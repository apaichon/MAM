const { BusinessObjects } = require('../PuppyFramework');

class MessageBiz extends BusinessObjects.BizBase {
    constructor(config) {
        config.collectionName = 'message';
        config.dbName = 'thaistringers';
        super(config);
    }
}

module.exports = MessageBiz;