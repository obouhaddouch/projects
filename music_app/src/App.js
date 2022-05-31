import React from 'react';
import { useState, useEffect } from 'react';

import Player from './components/Player';
import mySongs from './Songs';

import './css/App.css';

function App() {
  const [songs] =  useState(mySongs)

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);


  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);

 

  return (
    <div className="App">
      <Player className="player"
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

      

    </div>
  );
}

export default App;
