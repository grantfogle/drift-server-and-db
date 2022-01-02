const db = require("./database-connection");

module.exports = {
  listAll() {
    return db("rivers");
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
