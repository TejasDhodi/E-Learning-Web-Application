import React, { useEffect, useState } from 'react'
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'
import BlurComponent from './BlurComponent'
import { NavLink } from 'react-router-dom'
import { FaSchool, FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import '../Styles/Header.css'

const Header = () => {

    const [navbar, setNavbar] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const token = JSON.parse(localStorage.getItem('token'));
    const itemLength = useSelector((state) => state.wishList)

    const handleToggleNavbar = () => {
        setNavbar(!navbar)
    }

    const handleShowLogin = () => {
        setShowLogin(true)
        setShowRegister(false)
        setNavbar(handleToggleNavbar)
    }
    const handleShowRegister = () => {
        setShowRegister(true)
        setShowLogin(false)
        setNavbar(handleToggleNavbar)
    }

    const handleLogout = () => {
        alert("Logged Out Successfully");
        JSON.parse(localStorage.removeItem('token'));
        setNavbar(handleToggleNavbar);
    }

    useEffect(() => {
        if (showLogin || showRegister) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [showLogin, showRegister])


    return (
        <>
            <nav className="navigation_bar">
                <div className="nav_brand">
                    <FaSchool />
                </div>
                <div className="nav_controls ">
                    <div id="nav_close"></div>

                    <ul className={navbar ? "nav_items active" : "nav_items"}>
                        <li className="nav_link"> <NavLink onClick={() => setNavbar(false)} to="/">Home </NavLink></li>
                        <li className="nav_link"> <NavLink onClick={() => setNavbar(false)} to={token && "/Courses"}> Course </NavLink></li>
                        {
                            !token ? (
                                <>
                                    <li className="nav_link"> <NavLink onClick={handleShowLogin}> Log-In </NavLink></li>
                                    <li className="nav_link"> <NavLink onClick={handleShowRegister}> Register </NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li className="nav_link"><NavLink onClick={handleLogout}>Logout</NavLink></li>
                                    <li className="nav_link"> <NavLink to='/wishList' onClick={() => setNavbar(false)}> <FaShoppingCart /> {itemLength.length} </NavLink></li>
                                </>)
                        }

                    </ul>
                </div>
                <div className="hamburger" onClick={handleToggleNavbar}>
                    <div className={navbar ? "line active" : "line"} id='first'></div>
                    <div className={navbar ? "line active" : "line"} id='second'></div>
                    <div className={navbar ? "line active" : "line"} id='third'></div>
                </div>
            </nav>

            <section className='LoginRegister'>
                <LoginComponent showLogin={showLogin} setShowLogin={setShowLogin} showRegister={showRegister} />
                <RegisterComponent showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
                {
                    (showLogin || showRegister) && <BlurComponent />
                }

            </section>

        </>
    )
}

export default Header
