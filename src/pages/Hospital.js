import React from 'react'
import Adventist from '../img/adventist.jpg'
import Profile from '../img/profile.jpg'

export const Hospital = () => {
    return (
        <div className="container">
            <div className="hospital">
                <div className="hospital-info">
                    <img src={Adventist} alt="" />
                    <div className="contents">
                        <div className="left">
                            <div>
                                <h2>Adventist Hospital</h2>
                                <small>Hospital</small>
                            </div>
                            
                            <small>Number of Doctors: </small>
                        </div>
                        <div className="right">
                            <p>Bgy. San Pedro Puerto Princesa City 5300</p>
                            <p>Mon - Friday 8 AM to 9 PM</p>
                            <p><a href="">Contact No. : #0989125</a></p>
                            <a href="" className="message">Message</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hospital-doctors">
                <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search Doctor" />
                        <div className="dropdown">
                            <button>
                                Types of Doctor
                                <i className="fas fa-chevron-down"></i>
                            </button>
                            <div>
                                <a href="">Cardiology</a>
                                <a href="">Dentistry</a>
                                <a href="">Dermatology</a>
                                <a href="">Gastroenterology</a>
                            </div>
                        </div>
                    </form> 
                </div>
                <div className="single-doctor">
                    <div className="left">
                        <img src={Profile} alt="" className="avatar" />
                        <h4><a>Dr.</a> Farrah De Guzman</h4>
                    </div>
                    <div className="right">
                        <h4>Surgeon</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hospital