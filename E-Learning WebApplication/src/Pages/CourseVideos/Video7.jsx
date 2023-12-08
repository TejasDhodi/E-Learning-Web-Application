import React from 'react'
import CourseVIdeoComponent from '../../Components/CourseVIdeoComponent'
import { videoDetails } from '../../Services/Api'

const Video7 = () => {

  const videoData = videoDetails[6];
  const { id, url } = videoData;

  return (
    <>
      <CourseVIdeoComponent
        id={id}
        url={url}
      />
    </>
  )
}

export default Video7
