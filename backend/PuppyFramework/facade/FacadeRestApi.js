const Message = require('./Result');
const moment = require('moment');
const Validate  = require('validate.js');
const Logger = require('./Logger');
const Security = require('./Security');
let shared = {}

Validate.extend(Validate.validators.datetime, {
    // The value is guaranteed not to be null or undefined but otherwise it
    // could be anything.
    parse: function(value, options) {
      return +moment.utc(value)
    },
    // Input is a unix timestamp
    format: function(value, options) {
      var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
      return moment.utc(value).format(format)
    }
  })

  const validateArray = (values, validator) => {
    let results = [];

    values.forEach((a, i) => {
        let result = Validate(a, validator);
        if (result) {
            results.push({id: i, result:result});
        }
    })

    if(results.length ===0) {
        results = undefined;
    }

    return results;
  }


class FacadeRestApi {
    constructor (config) {
        shared.config = config;
    }

    static ExtractParameters (req) {
        const {application, objectname, objectmethod, objectfile} = req.headers;
        
        if (!application || !objectname || !objectmethod) {
            throw Message(530);
        }

        let input = (req.method ==='GET'? req.query: req.body);
        if(objectname ==='Authentication' && objectmethod === 'LogIn') {
            input.sessionID = req.sessionID;
        }
        
        let objClass = require(objectfile);
        let businessObject = {};
        businessObject.objectName = objectname;
        businessObject.object = new objClass(shared.config);
        businessObject.method = objectmethod;
        businessObject.input = input;

        return businessObject;
        
    }

    static IsValidInput (req) {
        let parameters = (req.method === 'GET'?req.query:req.body);
        let validator = require('../validator')[req.headers.validator]
        let result;
        
        if (Array.isArray(parameters)) {
            result = validateArray(parameters, validator);
        } else {
            result = Validate(parameters, validator );
        }

        if (result) {
            let msg = Message(530);
            msg.message = result;
            throw msg;
        }
        return result;
    }

    static async Invoke (businessObject) {
          let result = await  businessObject.object[businessObject.method](businessObject.input);
          let msg = Message(200);
          msg.data = result;
          return msg;
    }

    async Execute (req, res, next) {
        let result = {};
        try {

                // Security.SetConfig(shared.config);
                // let isExcepted = await Security.IsExceptApi(req);
               /* if(!isExcepted) {
                    // check is logon
                    let isValidSession = await Security.ValidateSession(req);
                    if (!isValidSession) throw Message(401);
                    // check permission
                    let isGrant = await Security.HasPermission(req);
                    if (!isGrant) throw Message(401);
                }*/
                let bo = FacadeRestApi.ExtractParameters(req);
                // let isValid = FacadeRestApi.IsValidInput(req);
                Logger.WriteReqLog(req, shared.config.logPath);
                result = await FacadeRestApi.Invoke(bo); 
        }
        catch(err) {
            if (err.code) {
                result = err;
            } else {
                result = Message(500);
                result.message = String(err)
            }
        }
        if (req.log) Logger.WriteResLog(req, result,shared.config.logPath);
        res.send(result);
    }
}

module.exports = FacadeRestApi;