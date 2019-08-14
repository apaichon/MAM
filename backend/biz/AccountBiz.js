const { BusinessObjects } = require('../PuppyFramework');

class AccountBiz extends BusinessObjects.BizBase {
    constructor(config) {
        config.collectionName = 'account';
        config.dbName = 'thaistringers';
        super(config);
    }
}

module.exports = AccountBiz;