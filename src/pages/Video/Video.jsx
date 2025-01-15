// import React from 'react'
import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import './Video.css'

const Video = () => {
  const {videoId, categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended />
    </div>
  )
}

export default Video
