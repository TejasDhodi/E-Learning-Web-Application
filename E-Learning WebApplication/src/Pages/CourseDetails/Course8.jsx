import React from 'react'
import CourseDetails from '../../Components/CourseDetails'
import { courseDescription, videoDetails } from '../../Services/Api';

const Course8 = () => {

    const courseData = courseDescription[7];
    const videoData = videoDetails[7];
    const { Image, Title, Rating, checkSign, Description, cost, Instructor, CourseDescription, Objective } = courseData;
    const { one, two, three, four, five } = Rating;
    const { instImage, instName, instDescription } = Instructor;

    return (
        <div>
            <CourseDetails
                Image={Image}
                Title={Title}
                checkSign={checkSign}
                Description={Description}
                cost={cost}
                CourseDescription={CourseDescription}
                Objective={Objective}
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
        </div>
    )
}

export default Course8
