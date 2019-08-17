const { BusinessObjects } = require('../PuppyFramework');

class ProfileBiz extends BusinessObjects.BizBase {
    constructor(config) {
        config.collectionName = 'profile';
        config.dbName = 'thaistringers';
        super(config);
    }
}

module.exports = ProfileBiz;