import React from 'react'
import '../Styles/Community.css'
import { communityExpertsDetails } from '../Services/Api'

const CommunityExperts = () => {
    return (
        <>
            <section id="experts">
                <div className="experts_title">
                    <h1>Community Experts</h1>
                    <p>Replenish man have things gathering lights yielding shall you </p>
                </div>

                <div className="expert_box">
                    {
                        communityExpertsDetails.map((currElem, index) => {
                            const { Image, Name, Description} = currElem;
                            return (
                                <div className="profile" key={index}>
                                    <div className="profile_img">
                                        <img src={Image} alt={Name} />
                                    </div>

                                    <div className="profile_description">
                                        <h4>{Name}</h4>
                                        <p>{Description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}

export default CommunityExperts
