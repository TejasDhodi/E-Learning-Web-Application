import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/HeroSection.css'

const HeroSecton = ({handleShowError}) => {

  const token = localStorage.getItem('token');

  return (
    <>
      <section id="home">
        <div className="home_details">
          <div className="home_description">
            <div className="home_title">
              <h2>Enhance Your Futute With NewEngineers</h2>
              <p> Always remember that you are absolutely unique. Just like everyone else. </p>
            </div>

            <div className="btn">
              <NavLink className="blue" onClick={handleShowError} to={token && "/Courses"} >Learn More</NavLink>
              <NavLink className="yellow" onClick={handleShowError} to={token && "/Courses"}>Visit Course</NavLink>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HeroSecton
