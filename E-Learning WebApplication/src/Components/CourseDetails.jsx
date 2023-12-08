import React from 'react';
import '../Styles/CourseDetails.css'
import {Link} from 'react-router-dom'
import { courseDescription } from '../Services/Api';
import { useNavigate } from 'react-router-dom';

const CourseDetails = ({ videoID, Image, Title, checkSign, Description, cost, CourseDescription, one, two, three, four, five, instImage, instName, instDescription }) => {

  const courseData = courseDescription;
  const { Objective } = courseData[videoID - 1];

  return (
    <>

      <section id="coursedetails">

        <div className="course_header">
          <h1 className="course_title">Enroll Our Popular Courses and Skill Up</h1>
          <p className="course_description">Replenish man have things gathering lights yielding shall you </p>
        </div>

        <div className="overview">
          <img className="course_img" src={Image} alt={Title} />
          <div className="course_head">
            <div className="c_name">
              <h2>{Title}</h2>
              <div className="star">
                {one}
                {two}
                {three}
                {four}
                {five}
              </div>
              <p>{Description}</p>
            </div>
            <span>${cost}</span>
          </div>
          <h3>Instructor</h3>
          <div className="tutor">
            <img src={instImage} alt={instName} />
            <div className="tutor_details">
              <h5>{instName}</h5>
              <p>{instDescription}</p>
            </div>
          </div>
          <hr />
          <h3>Description</h3>
          <p>{CourseDescription}</p>
          <hr />
          <h3>What You'll Learn</h3>
          <div className="learn">
            {
              Objective.map((objective, index) => {
                return (
                  <p key={index}> {checkSign} {objective}</p>
                )
              })
            }

          </div>
          <div className="getVideoBtn">
            <Link to={`/Courses/videos/${videoID}`}>Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
