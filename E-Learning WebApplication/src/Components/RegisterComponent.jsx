import React, { useState } from 'react'
import Loading from './Loading';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import '../Styles/RegisterLogin.css'

const RegisterComponent = ({ showRegister, setShowRegister, setShowLogin }) => {
    const [userData, setUserData] = useState({
        userName: "",
        emailId: "",
        password: "",
        cPassword: ""
    });

    const [regError, setRegError] = useState('')
    const [loading, setLoading] = useState(false);


    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUserData((prevdata) => ({ ...prevdata, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);

            const res = await axios.post('https://authentication-dtqs.onrender.com/api/register/register', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = res.data;
            if (res.status === 201) {
                setShowRegister(false);
                setUserData({
                    userName: "",
                    emailId: "",
                    password: "",
                    cPassword: ""
                });
                alert('Registration Successful! Please Login');
                setShowLogin(true);
                setRegError('')
            };
            console.log(data);

        } catch (error) {
            console.log("Unable to Register user", error.response.data);
            setRegError(error.response.data)
        } finally {
            setLoading(false);
        };
    };

    return (
        <>
            <div className={showRegister ? "register_container showRegister " : "register_container"}>

                <div className="close_form" id="close_form_2" onClick={() => setShowRegister(false)}>
                    <IoMdClose />
                </div>

                <div className="form_title">
                    <h1>Register</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="user_inputs">
                        <label htmlFor="username">User Name</label>
                        <input type="text" name="userName" value={userData.userName} onChange={handleInputs} placeholder="Enter Your Username" />
                    </div>

                    <div className="user_inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="emailId" value={userData.emailId} onChange={handleInputs} placeholder="Enter Your Email" />
                    </div>

                    <div className="user_inputs">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={userData.password} onChange={handleInputs} placeholder="Enter Your Password" />
                    </div>

                    <div className="user_inputs">
                        <label htmlFor="c_password">Confirm Password</label>
                        <input type="password" name='cPassword' value={userData.cPassword} onChange={handleInputs} placeholder="Enter Your Password" />
                    </div>

                    {
                        loading ? <Loading /> :
                            <div className="form_btn">
                                <button type="submit">Sign up</button>
                            </div>
                    }

                    {
                        regError && <p className='error_message'>{JSON.stringify(regError).slice(34).split('"}').join(" ") || JSON.stringify(regError).slice(8).split('"}').join(" ")}</p>
                    }

                </form>
            </div>
        </>
    )
}

export default RegisterComponent
