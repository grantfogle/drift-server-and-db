const db = require("./database-connection");

module.exports = {
  listAll() {
    return db("rivers");
  },
  createUser({ email, password }) {
    return db("users")
      .insert({ email, password })
      .returning(["user_id", "email"]);
  },
  getUser(email) {
    return db("users").where("email", email);
  },
  getAllUsers() {
    return db("users");
  }
  // getPlaylistByName(playlistName) {
  //     return db('playlists').where('playlistName', playlistName);
  // },
  // createPlaylist(newPlaylist) {
  //     return db('playlists').insert(newPlaylist).returning('*');
  // },
  // deletePlaylist(playlistName) {
  //     return db('playlists').where('playlistName', playlistName).delete();
  // }
};
