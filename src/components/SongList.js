import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {

  const theSongs = songs.map((song) => {
    return <li><Song song={song}/></li>
  })

  return (
    <ul className="song-list">
      {theSongs}
    </ul>
  );
}

export default SongList;
