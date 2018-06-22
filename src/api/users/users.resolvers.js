const User = async (_, { id }, ctx) => {
  return await ctx.models.User.findOne({ _id: id });
};

module.exports = {
  Query: {
    User,
  },
};
