exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("rivers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("rivers").insert([
        {
          river_name: "Colorado River",
          geo_identifier: "Kremmling",
          state: "CO",
          country: "USA",
          watershed: "Colorado River",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 1450,
          alerts: "offColor"
        },
        {
          river_name: "Roaring Fork",
          geo_identifier: "Aspen",
          state: "CO",
          country: "USA",
          watershed: "Colorado River",
          usgsId: "1245",
          lat: "54.22",
          long: "107.93",
          currentFlow: 450,
          alerts: ""
        },
        {
          river_name: "Eagle River",
          geo_identifier: "Eagle",
          state: "CO",
          country: "USA",
          watershed: "Colorado River",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 460,
          alerts: "offColor"
        },
        {
          river_name: "Frying Pan",
          geo_identifier: "Basalt",
          state: "CO",
          country: "USA",
          watershed: "Colorado River",
          usgsId: "1247",
          lat: "55.22",
          long: "108.93",
          currentFlow: 1450,
          alerts: "offColor"
        },
        {
          river_name: "Gore Creek",
          geo_identifier: "Vail",
          state: "CO",
          country: "USA",
          watershed: "Colorado River",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 150,
          alerts: "offColor"
        },
        {
          river_name: "South Platte",
          geo_identifier: "Deckers",
          state: "CO",
          country: "USA",
          watershed: "South Platte",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 350,
          alerts: "offColor"
        }
      ]);
    });
};
