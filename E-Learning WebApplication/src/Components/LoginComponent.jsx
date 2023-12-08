import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import axios from 'axios';
import { setToken } from '../Fetures/authSlice';
import { useDispatch } from 'react-redux';

import '../Styles/RegisterLogin.css'

const LoginComponent = ({ showLogin, setShowLogin }) => {
    const [userData, setUserData] = useState({
        emailId: "",
        password: ""
    });

    const [regError, setRegError] = useState('');

    const dispatch = useDispatch();

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://authentication-dtqs.onrender.com/api/login/login', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = res.data

            if (res.status === 200) {
                dispatch(setToken(data.token))
                alert('Login Successful');
                setUserData({
                    emailId: "",
                    password: ""
                });
                setShowLogin(false);
                console.log(data);
            }

        } catch (error) {
            setRegError(error.response.data)
            console.log("Unable to login", error);
        }
    }
    return (
        <>
            <div className={showLogin ? "login openForm" : "login"}>
                <div className="close_form" onClick={() => setShowLogin(false)}>
                    <IoMdClose />
                </div>
                <div className="form_title">
                    <h1>Log-in</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="user_inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="emailId" value={userData.emailId} onChange={handleInputs} placeholder="Enter Your Email" autoFocus />
                    </div>

                    <div className="user_inputs">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={userData.password} onChange={handleInputs} placeholder="Enter Your Password" />
                    </div>

                    <div className="form_btn">
                        <button type="submit">Sign in</button>
                    </div>

                    {
                        regError && <p className='error_message'>{JSON.stringify(regError).slice(34).split('"}').join(" ") || JSON.stringify(regError).slice(8).split('"}').join(" ")}</p>
                    }

                </form>
            </div>
        </>
    )
}

export default LoginComponent
