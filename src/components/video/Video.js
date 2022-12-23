import ReactPlayer from 'react-player'
import React from 'react'
import "./Video.css"
import useMatchMedia from '../../tools/matchMedia';

const Video = ({vidLink}) => {
  const resize = useMatchMedia(900);

  return (
    <ReactPlayer 
      controls
      width="100%" height={resize ? "600px" : "300px"}
      url={vidLink}
    />
  )
}

export default Video