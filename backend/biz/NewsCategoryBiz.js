const { BusinessObjects } = require('../PuppyFramework');

class NewsCategoryBiz extends BusinessObjects.BizBase {
    constructor (config) {
        config.collectionName = 'newsCategory';
        config.dbName = 'thaistringers';
        super(config);
    }

}

module.exports = NewsCategoryBiz;