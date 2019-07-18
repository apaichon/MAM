const { BusinessObjects } = require('../PuppyFramework');

class AccountProfileBiz extends BusinessObjects.BizBase {
    constructor(config) {
        config.collectionName = 'accountProfile';
        config.dbName = 'thaistringers';
        super(config);
    }
}

module.exports = AccountProfileBiz;