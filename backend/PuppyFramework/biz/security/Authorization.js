const BizBase = require('../../biz/BizBase');
const ExceptionApi = require('./ExceptionApi');

class Authorization extends BizBase {
  constructor(config) {
    config.collectionName = 'authorization';
    config.DbName = 'membership';
    super(config);
    this.config = config;
  }


  async IsExceptionApi (methodInfo) {
    let exceptApiDb = new ExceptionApi (this.config);
    let isException = await exceptApiDb.Count(methodInfo);
    return isException;
  }

  async GetApiPermission (reqInfo) {
    let isGrant = await this.Count(reqInfo);
    return isGrant;
  }

}

module.exports = Authorization;
