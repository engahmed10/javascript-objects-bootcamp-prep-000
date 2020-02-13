var playlist = { ibo : "haydisoyle" }
function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName]=songTitle;
  return playlist
}
function removeFromPlaylist(playlist1,artistName)
{
  delete playlist1.artistName;
  return playlist1
 
}