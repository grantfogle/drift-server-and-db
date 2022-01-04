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
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Canon City",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 254,
          alerts: ""
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Granite",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 0,
          alerts: "frozen"
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Below Pueblo Reservoir",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 106,
          alerts: "low flows"
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Near Wellsville",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 270,
          alerts: "low flows"
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Salida",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 258,
          alerts: "low flows"
        },
        {
          river_name: "Arkansas River",
          geo_identifier: "Leadville",
          state: "CO",
          country: "USA",
          watershed: "Arkansas",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 0,
          alerts: "frozen"
        },
        {
          river_name: "Blue River",
          geo_identifier: "Silverthorne",
          state: "CO",
          country: "USA",
          watershed: "Colorado",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 64,
          alerts: "low flows"
        },
        {
          river_name: "Blue River",
          geo_identifier: "Dillon",
          state: "CO",
          country: "USA",
          watershed: "Colorado",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 58,
          alerts: "low flows"
        },
        {
          river_name: "Blue River",
          geo_identifier: "Green Mountain",
          state: "CO",
          country: "USA",
          watershed: "Colorado",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 270,
          alerts: ""
        },
        {
          river_name: "Colorado River",
          geo_identifier: "Windy Gap (Chimney Rock)",
          state: "CO",
          country: "USA",
          watershed: "Colorado",
          usgsId: "1244",
          lat: "55.22",
          long: "108.93",
          currentFlow: 0,
          alerts: "frozen"
        }
      ]);
    });
};
