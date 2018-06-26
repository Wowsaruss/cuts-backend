const { GraphQLServer } = require('graphql-yoga');
const gqlServerConfig = require('./api');
const config = require('../config');

require('./db')(config.db.mongodb.uri);

const serverOptions = {
  port: config.server.port,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true,
  debug: true,
};

const server = new GraphQLServer(gqlServerConfig);
server.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));
