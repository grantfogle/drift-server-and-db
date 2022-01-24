// knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable("rivers", river => {
    river.increments("id");
    river.string("name");
    river.string("geo_tag");
    river.string("state");
    river.string("country");
    river.string("watershed");
    river.string("usgs_id");
    river.string("lat");
    river.string("long");
    river.integer("current_cfs");
    river.boolean("warm_water");
    river.boolean("low_flows");
    river.boolean("high_water");
    river.boolean("iced");
  });
};

// instead of alerts have booleans
// warm water, low flows, iced, high water, etc.
// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rivers");
};
