module.exports = {
  resolvers: require('./users.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('./users.graphql'),
  model: require('./users.model'),
};
