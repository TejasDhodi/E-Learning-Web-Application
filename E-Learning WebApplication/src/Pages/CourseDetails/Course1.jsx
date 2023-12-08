import React from 'react'
import CourseDetails from '../../Components/CourseDetails'
import { courseDescription, videoDetails } from '../../Services/Api'
const Course1 = () => {

  const courseData = courseDescription[0]
  const videoData = videoDetails[0];
  console.log("courseData: ", courseData);
  // courseDescription
  const { Image, Title, Rating, checkSign, Description, cost, Instructor, CourseDescription } = courseData;
  const { one, two, three, four, five } = Rating;
  const { instImage, instName, instDescription } = Instructor;

  return (
    <>
      <CourseDetails
        Image={Image}
        Title={Title}
        checkSign={checkSign}
        Description={Description}
        cost={cost}
        CourseDescription={CourseDescription}
        one={one}
        two={two}
        three={three}
        four={four}
        five={five}
        instImage={instImage}
        instName={instName}
        instDescription={instDescription}
        videoID={videoData.id}
      />
    </>
  )
}

export default Course1
