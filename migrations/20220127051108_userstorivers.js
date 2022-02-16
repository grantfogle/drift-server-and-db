exports.up = function(knex) {
  return knex.schema.createTable("userstorivers", user => {
    user.integer("userId");
    user.string("usgsId");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("userstorivers");
};
