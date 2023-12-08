import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import HeroSecton from '../Components/HeroSecton'
import CoursesComponent from '../Components/CoursesComponent'
import CommunityExperts from '../Components/CommunityExperts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  const [showError, setShowError] = useState(false);

  const showPopup = () => {
    toast.info(`Note: You Need To Login or Register to Access The courses,
    You Want be Able to access courses without Login or Registration
    `)

  };

  const handleShowError = () => {
    if (!token) {
      setShowError(!showError);
    } else {
      setShowError(false)
    }
  }

  useEffect(() => {
    if (!token) {
      showPopup()
    }
  }, []);

  if (showError) {
    toast.warn('Login To Continue')
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
        draggable
        pauseOnHover
      />
      <Header />
      <HeroSecton handleShowError={handleShowError} />
      <CoursesComponent handleShowError={handleShowError} />
      <CommunityExperts />


    </>
  )
}

export default Home
