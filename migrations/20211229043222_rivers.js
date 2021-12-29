// knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable("riverList", river => {
    river.increments("river_id");
  });
};

// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rivers");
};
