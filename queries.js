const db = require("./database-connection");

module.exports = {
  listAll() {
    return db("rivers");
  },
  createUser(email, password) {
    return db("users")
      .insert({ email, password })
      .returning(["user_id", "email", "password", "favorites"]);
  },
  getUser(email) {
    return db("users").where("email", email);
  },
  getAllUsers() {
    return db("users");
  },
  deleteUser(email) {
    return db("users")
      .where("email", email)
      .delete();
  },
  updateRiverFlows(riverDataArr) {
    riverDataArr.map(river => {
      if (db("rivers").where("usgsId", river.usgsId)) {
        db("rivers")
          .where("usgsId", rivers.usgsId)
          .update({
            current_cfs: river.currentCFS,
            mean_cfs: river.mean,
            median_cfs: river.medianFlow
          });
      }
    });
  },
  getUsersFavorites(userId) {
    return db("userstorivers")
      .select(
        "rivers.name",
        "rivers.geoTag",
        "rivers.state",
        "rivers.country",
        "rivers.watershed",
        "rivers.usgsId",
        "rivers.lat",
        "rivers.long",
        "rivers.currentCFS",
        "rivers.meanCFS",
        "rivers.medianCFS",
        "rivers.warmWater",
        "rivers.lowWater",
        "rivers.highWater",
        "rivers.iced",
        "rivers.defaultDisplay"
      )
      .join("rivers", "rivers.usgsId", "userstorivers.usgsId")
      .join("users", "users.userId", "userstorivers.userId")
      .where("users.userId", userId);
  },
  addUserFavorite(userId, usgsId) {
    return db("userstorivers")
      .insert({ userId, usgsId })
      .returning("userId", "usgsId");
  },
  removeUserFavorite(userId, usgsId) {
    return db("userstorivers")
      .where({ userId: userId, usgsId: usgsId })
      .delete();
  },
  getUsersToRivers() {
    return db("userstorivers");
  },
  getTopRivers() {
    return db("rivers").where("defaultDisplay", true);
  },
  getByRiversId(riverId) {
    return db("rivers").where("usgsId", riverId);
  },
  getByRivers(riverName) {
    return db("rivers").where("name", riverName);
  },
  getByWatershed(watershedName) {
    return db("rivers").where("watershed", watershedName);
  }
};
