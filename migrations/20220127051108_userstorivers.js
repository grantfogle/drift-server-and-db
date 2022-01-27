exports.up = function(knex) {
  return knex.schema.createTable("userstorivers", user => {
    user.increments("user_id");
    user.string("usgs_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("userstorivers");
};
