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
    //
    // return db()
  },
  getUsersFavorites() {
    return db("userstorivers");
  }
};
