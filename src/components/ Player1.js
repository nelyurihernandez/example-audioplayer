import React, { useState } from 'react';
import Player from "@madzadev/audio-player";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const Player1 = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <div>
      {play ? (
        <Player trackList={tracks} 
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}

        
        />
      ) : (
        <button onClick={handlePlay}>Iniciar</button>
      )}
    </div>
  );
}

export default Player1;