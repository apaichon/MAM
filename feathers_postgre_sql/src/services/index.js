const postgreSql = require('./notification/notification.service');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(postgreSql);
};
