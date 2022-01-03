exports.up = function(knex) {
  return knex.schema.createTable("users", river => {
    river.increments("user_id");
    river.string("email");
    river.string("password");
    river.string("favorites");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
