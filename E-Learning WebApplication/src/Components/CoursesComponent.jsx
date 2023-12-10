import React from 'react'
import CourseCardComponent from './CourseCardComponent'
import { courseCardDetails1 } from '../Services/Api'
import '../Styles/Courses.css'
import { NavLink } from 'react-router-dom';

const CoursesComponent = ({ handleShowError }) => {

    const token = localStorage.getItem('token');

    return (
        <>
            <section id="couses">

                <div className="course_title">
                    <h1>Courses We Offer</h1>
                    <p>Get any of these premium courses absolutely free</p>
                </div>

                <div className="course_container">

                    {
                        courseCardDetails1.map((currElem, index) => {
                            const { Image, Title } = currElem;

                            return (
                                <CourseCardComponent Image={Image} Title={Title} key={index} />
                            )
                        })
                    }
                </div>

                <div className="get_course">
                    <NavLink onClick={handleShowError} to={token && "/Courses"} >Get Course</NavLink>
                </div>

            </section>

        </>
    )
}

export default CoursesComponent
