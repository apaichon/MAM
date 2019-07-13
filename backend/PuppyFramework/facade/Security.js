const { Authentication, Authorization } = require('../biz/security');
const validate = require('validate.js');
const { SessionInfoValidator } = require('../validator');

let shared = {}

class Security {

    constructor (config) {
        shared.config = config;
    }

    static SetConfig (config) {
        shared.config = config;
    }

   static async IsExceptApi (req) {
  
    let { application, module , objectname, objectmethod } = req.headers
    let appInfo = { application, module, objectname, objectmethod }
    let auth = new Authorization (shared.config);
    let isExcepted = await auth.IsExceptionApi (appInfo)
    if (isExcepted === 1) {
      return true;
    }
    return false;
  }

  static async ValidateSession (req) {
    let auth = new Authentication (shared.config)
    console.log('sessionID',req.sessionID)
    let sessionInfo = await auth.ValidateSession(req.sessionID)
    let isInvalid = validate(sessionInfo, SessionInfoValidator)
    req.sessionInfo = sessionInfo
    console.log('sessionInfo', sessionInfo)
    if (isInvalid) {
      return false;
    } 
    return true;
  }

  static async HasPermission ( req) {
    let authorize = new Authorization (shared.config)
      let { username } = req.sessionInfo
      let { application, module , objectname, objectmethod } = req.headers
      let appParams = { application, module, objectname, objectmethod }

      console.log(appParams)
      let isGrant = await authorize.GetApiPermission(appParams)
      if (isGrant) {
        return true;
      } 
      return false;
  }

  static Encrypt(text) {
    return new Promise((resolve, reject) => {
      var bcrypt = require('bcrypt');
      const saltRounds = 10;
      const myPlaintextPassword = text;
      
      bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    })
    
  }
}

module.exports = Security;