import React from 'react';
import '../Styles/Footer.css'
import { footerDetails } from '../Services/Api';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_details">

                    {
                        footerDetails.map((currElem, index) => {
                            const { Title, Description } = currElem;
                            const { first, second, third, fourth } = Description;
                            return (
                                <div className="footer_details_2" key={index}>
                                    <h3 className="fh3">{Title}</h3>
                                    <ul>
                                        <li>{first}</li>
                                        <li>{second}</li>
                                        <li>{third}</li>
                                        <li>{fourth}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }

                    <div className="footer_details_2">
                        <h3 className="fh3">Social Media</h3>
                        <ul>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Linkedin</a></li>
                        </ul>
                    </div>

                </div>

                <div className="copyright">
                    <p>Copyright @2024 all rights reserved | This Is made by NewEngineers!</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
