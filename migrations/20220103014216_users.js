exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user.increments("userId");
    user.string("email");
    user.string("password");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
