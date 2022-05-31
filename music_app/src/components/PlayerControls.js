import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


function PlayerControls(props) {
  return (
    <div className='c-player--controls' >
        <button className='skip-tn' onClick={() => props.SkipSong(false)} >
            <FontAwesomeIcon className='i' icon={faBackward} />    
        </button>

        <button className='play-btn' onClick={() => props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon className='i' icon={props.isPlaying ? faPause : faPlay} />
        </button>

        <button className='skip-tn' onClick={() => props.SkipSong()} >
            <FontAwesomeIcon className='i' icon={faForward} />
        </button>

    </div>
  )
}

export default PlayerControls