import AudioPlayer from 'react-audio-player';
import React from 'react'

const Audio = ({audioFile}) => {
  return (
    <AudioPlayer
        src={audioFile}
        controls
    />
  )
}

export default Audio