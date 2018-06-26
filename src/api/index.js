const users = require('./users');
const merge = require('lodash/merge');

module.exports = {
  typeDefs: [users.typeDefs].join(' '),
  resolvers: merge({}, users.resolvers),
  context: req => ({
    ...req,
    models: {
      users: users.model,
    },
  }),
};

module.exports.models = {
  users: users.model,
};
