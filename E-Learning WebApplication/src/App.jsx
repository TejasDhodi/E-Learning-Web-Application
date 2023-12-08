import React, { useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import { courseLength } from './Routes/CourseDetailsRoutes';
import { videoLength } from './Routes/CourseVideosRoutes';
import WishList from './Pages/WishList';

import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Courses" >
          <Route index element={<Courses />} />

          {
            courseLength.map((Length, index) => (
              <Route key={index} path={`details/${index + 1}`} element={<Length />} />
            ))
          }

          {
            videoLength.map((VLength, vIndex) => (
              <Route key={vIndex} path={`videos/${vIndex + 1}`} element={<VLength />} />
            ))
          }

        </Route>
        <Route path='/wishList' element={<WishList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
