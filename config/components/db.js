module.exports = {
  db: {
    mongodb: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
    },
  },
};
