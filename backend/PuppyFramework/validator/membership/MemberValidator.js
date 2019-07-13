const moment = require('moment');

const MemberValidator = {
  'firstName': {
    presence: {
      message: "is required."
    },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z."
    }
  },
  'lastName': {
    presence: {
      message: "is required."
    },
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "can only contain a-z."
    }
  },
  'gender': {
    presence: {
      message: "is required."
    },
    inclusion: {
      within: [0, 1],
      message: "^is currently out of %{value}"
    }
  },
  birthday: {
    datetime: {
      dateOnly: true,
      latest: moment.utc().subtract(18, 'years'),
      message: "^You need to be atleast 18 years old"
    }
  },
  registeredDate: {
    presence: true,
    datetime: true
  },
  'email': {
    email: {
      message: "doesn't look like a valid email"
    }
  }
}

module.exports = MemberValidator;

