// This component is a wrapper for the react-audio-player component

import AudioPlayer from 'react-audio-player';
import React from 'react'

// returns an AudioPlayer element that plays the audio file specified by the audioFile prop
const Audio = ({audioFile}) => {
  return (
    <AudioPlayer
        src={audioFile}
        controls
    />
  )
}

export default Audio