// Initializes the `PostgreSQL` service on path `/postgre-sql`
const { PostgreSql } = require('./notification.class');
const createModel = require('../../models/notification.model');
const hooks = require('./notification.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/notification', new PostgreSql(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('notification');

  service.hooks(hooks);
};
