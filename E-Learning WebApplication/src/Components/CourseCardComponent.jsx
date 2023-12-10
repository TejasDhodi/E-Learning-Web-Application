import React, { useState } from 'react'

const CourseCardComponent = ({ Image, Title, Cost, Date, one, two, three, four, five, redirectToCourseDetails, handleAdd }) => {
    const [wishList, setWishList] = useState(false);

    const showWishlist = () => {
        setWishList(true);
    };

    const hideWishlist = () => {
        setWishList(false);
    };

    return (
        <>

            <div className="course_card" >

                <div className="course_card_body">
                    <div className="course_card_image">
                        <img src={Image} alt={Title} />
                    </div>

                    <div className="course_card_details">
                        <h3>{Title}</h3>
                        <span>{Date}</span>
                        <div className="star">
                            {one}{two}{three}{four}{five}
                        </div>
                        <div className="cost">
                            {Cost}
                        </div>
                        {
                            Date &&
                            <>
                                <button className='get_Btn' onClick={redirectToCourseDetails}>Get</button>
                                <span className='wish_list' onClick={handleAdd} onMouseLeave={hideWishlist} onMouseEnter={showWishlist}>❤️</span>
                                <span className={wishList ? 'wishNote show' : 'wishNote'} >Add To WishList..!</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCardComponent
