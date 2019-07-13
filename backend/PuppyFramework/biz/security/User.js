const BizBase = require('../../biz/BizBase');

class User extends BizBase {
  constructor(config) {
    config.collectionName = 'users';
    config.dbName = 'membership';
    super(config);
  }
}

module.exports = User;