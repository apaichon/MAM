const BizBase = require('../../biz/BizBase');

class ExceptionApi extends BizBase {
  constructor (config) {
    config.collectionName = 'exceptionApi';
    config.dbName = 'membership';
    super(config);
  }
}

module.exports = ExceptionApi;