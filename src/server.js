const { GraphQLServer } = require('graphql-yoga');
const graphqlAPI = require('./api');

const serverSettings = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
};

const server = new GraphQLServer(graphqlAPI);

server.start(serverSettings, ({ port }) => console.log(`Server on port ${port}`));
