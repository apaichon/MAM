const { DbServer } = require('./config')
const { Middlewares } = require('./PuppyFramework')

const server = new Middlewares.Server (3001);
const facade = new Middlewares.FacadeRestApi(DbServer.dev);

server.All('/api/execute',facade.Execute);


