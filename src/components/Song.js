import React from 'react';

const Song = ({song}) => {

  return (
    <div className="song">
      <h3>{song['im:name'].label}</h3>
      <p>{song['im:artist'].label}</p>
      <p>Genre: {song.category.attributes.term}</p>
      <img src={song['im:image'][0].label} height="100px" width="100px" alt="image"/>
    </div>
  );
}

export default Song;
