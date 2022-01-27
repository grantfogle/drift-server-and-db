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
    river.integer("currentCFS");
    river.integer("meanCFS");
    river.integer("medianCFS");
    river.boolean("warmWater");
    river.boolean("lowFlows");
    river.boolean("highWater");
    river.boolean("iced");
  });
};

// instead of alerts have booleans
// warm water, low flows, iced, high water, etc.
// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rivers");
};
