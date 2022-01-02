// knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable("rivers", river => {
    river.increments("id");
    river.string("river_name");
    river.string("geo_identifier");
    river.string("state");
    river.string("country");
    river.string("watershed");
    river.string("usgsId");
    river.string("lat");
    river.string("long");
    river.integer("currentFlow");
    river.string("alerts");
  });
};
// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rivers");
};
