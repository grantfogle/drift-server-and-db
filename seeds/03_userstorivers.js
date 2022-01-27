exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("userstorivers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("usertorivers").insert([
        { userId: 1, usgsId: "013344" },
        { userId: 2, usgsId: "045566" }
      ]);
    });
};
