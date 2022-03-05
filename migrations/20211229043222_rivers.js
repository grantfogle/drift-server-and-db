// knex migrate:latest
exports.up = function(knex) {
  return knex.schema.createTable("rivers", river => {
    river.string("name");
    river.string("geoTag");
    river.string("state");
    river.string("country");
    river.string("watershed");
    river.string("usgsId");
    river.string("lat");
    river.string("long");
    river.float("currentCFS");
    river.float("meanCFS");
    river.float("medianCFS");
    river.boolean("warmWater");
    river.boolean("lowWater");
    river.boolean("highWater");
    river.boolean("iced");
    river.boolean("defaultDisplay");
    river.boolean("favorite");
  });
};

// instead of alerts have booleans
// warm water, low flows, iced, high water, etc.
// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rivers");
};
