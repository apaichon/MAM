const BizBase = require('../BizBase');

class Member extends BizBase {
    constructor (config) {
        config.collectionName = 'members';
        config.dbName = 'membership';
        super(config);
    }
}

module.exports = Member;