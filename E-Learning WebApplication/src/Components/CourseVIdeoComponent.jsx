import React from 'react'
import '../Styles/CourseVideo.css'

const CourseVIdeoComponent = ({ url }) => {
    return (
        <>
            <div className="videoContainer">
                <div className="mainVideo">
                    <iframe className='myVideo' src={url} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope "
                        allowFullScreen controls></iframe>
                </div>
            </div>
        </>
    )
}

export default CourseVIdeoComponent
