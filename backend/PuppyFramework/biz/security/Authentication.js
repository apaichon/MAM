const BizBase = require('../../biz/BizBase');
const validate = require('validate.js');
const { UserValidator } = require('../../validator');
const User = require ('./User');
const bcrypt =  require('bcrypt');

class Authentication extends BizBase {
  constructor(config) {
    config.collectionName = 'userLogon';
    config.dbName = 'membership';
    super(config);
    this.config = config;
  }

  async LogIn (userInfo) {
    let { username, password } = userInfo
    let isValid = await this.ValidateUser(userInfo)
    let users = new User(this.config)
    let user = await users.FindOne({ username })
    let result = bcrypt.compareSync(password, user.password)

    if (result) {
      delete userInfo.password
      let registered = await this.RegisterSession(userInfo)
      return registered
    }
    throw {
      code: 401,
      status: 'error',
      message: 'Unauthorized'
    }
  }

  async LogOut (userInfo) {
    let { username, sessionID } = userInfo
    let condition = { condition: { username, sessionID } }
    let removed = await this.Remove(condition)
    return removed
  }

  // Insert data in MongoDB
  async RegisterSession (userInfo) {
    userInfo.logOn = new Date()
    let dataWithCondition = {
      data: userInfo,
      condition: { sessionID: userInfo.sessionID }
    }
    let registered = await this.EditAdd (dataWithCondition)
    return registered
  }

  ValidateUser (userInfo) {
    return new Promise((resolve, reject) => {
      let message = validate(userInfo, UserValidator )
      if (message) {
        reject('Invalid parameter!')
      } else {
        resolve(true)
      }
    })
  }

  async ValidateSession (sessionID) {
    let sessionInfo = await this.FindOne({ sessionID: sessionID })
    return sessionInfo
  }
}
module.exports = Authentication;
