const SessionInfoValidator = {
    'username': {
      presence: {
        message: "is required."
      },
      email: {
        message: "is invalid format!"
      }
    },
    'sessionID': {
      presence: {
        message: "is required."
      }
    }
  }
  
module.exports = SessionInfoValidator;