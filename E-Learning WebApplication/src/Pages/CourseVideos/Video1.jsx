import React from 'react'
import CourseVIdeoComponent from '../../Components/CourseVIdeoComponent';
import { videoDetails } from '../../Services/Api';

const Video1 = () => {
    const videoData = videoDetails[0];
    const { id, url } = videoData;
    console.log(videoData);
    return (
        <>
            <CourseVIdeoComponent
                id={id}
                url={url}
            />
        </>
    )
}

export default Video1
