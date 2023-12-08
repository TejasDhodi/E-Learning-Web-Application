import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Fetures/wishlistSlice';
import '../Styles/WishList.css'
import { useNavigate } from 'react-router-dom';

const WishList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const corses = useSelector((state) => state.wishList);
    console.log(corses);

    const handleRemove = (id) => {
        dispatch(remove(id))
    }

    const redirectToCourseDetails = (id) => {
        navigate(`/courses/details/${id}`)
    }

    return (
        <div className='wishList_Section'>
            <h1>Your WishList</h1>
            {
                corses.map((course) => {
                    const { id, image, name, cost } = course;
                    return (
                        <ul key={id}>
                            <li><img src={image} alt={name} /></li>
                            <li>{name}</li>
                            <li>{cost}</li>
                            <li className='get_Btn btn' onClick={() => redirectToCourseDetails(id)}>Get</li>
                            <li onClick={() => handleRemove(id)}><FaTrashAlt /></li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default WishList
