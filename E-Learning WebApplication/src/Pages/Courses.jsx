import React, { useState } from 'react'
import CourseCardComponent from '../Components/CourseCardComponent'
import { courseCardDetails } from '../Services/Api'
import { useNavigate } from 'react-router-dom'
import { add } from '../Fetures/wishlistSlice'
import { useDispatch } from 'react-redux'
import "../Styles/Courses.css"
const Courses = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const redirectToCourseDetails = (courseId) => {
        navigate(`/Courses/details/${courseId}`)
    }

    const handleAdd = (Item) => {
        const payload = {
            id: Item.Id,
            image: Item.Image,
            name: Item.Title,
            cost: Item.Cost,
        };

        dispatch(add(payload));
    }


    return (
        <>
            <section className='CoursesPage' id="couses">

                <div className="course_title">
                    <h1>Courses We Offer</h1>
                    <p>Get any of these premium courses absolutely free</p>
                </div>

                <div className="search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='🔍 Search By Name' />
                </div>

                <div className="course_container">

                    {
                        courseCardDetails.filter((item) => item.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((currElem, index) => {
                            const { Image, Title, Cost, Date, Rating, Id } = currElem;
                            const { one, two, three, four, five } = Rating;

                            return (

                                <CourseCardComponent
                                    Image={Image}
                                    Title={Title}
                                    Cost={Cost}
                                    Date={Date}
                                    one={one}
                                    two={two}
                                    three={three}
                                    four={four}
                                    five={five}
                                    key={index}
                                    redirectToCourseDetails={() => redirectToCourseDetails(Id)}
                                    handleAdd={() => handleAdd(currElem)}
                                />
                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}

export default Courses
