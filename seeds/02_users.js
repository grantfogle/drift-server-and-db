exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "grantjfogle@gmail.com",
          password:
            "$2b$10$Pi6YYMWc.befx0u5KCsJX.coVS/CZ2GLMaERh46Eisfs0wUR9Svpu"
        },
        {
          email: "fishboy@gmail.com",
          password:
            "$2b$10$Pi6YYMWc.befx0u5KCsJX.coVS/CZ2GLMaERh46Eisfs0wUR9Svpu"
        }
      ]);
    });
};
