import React from 'react'
import CourseVIdeoComponent from '../../Components/CourseVIdeoComponent'
import { videoDetails } from '../../Services/Api'

const Video6 = () => {

  const videoData = videoDetails[5];
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

export default Video6
