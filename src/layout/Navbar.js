import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'

export const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <Link to="/" class="logo">
                    <img src={Logo} alt="" />
                </Link>
                <ul>
                    <li>
                        <Link to="/" class="active">Home</Link> 
                    </li>
                    <li>
                    <div class="dropdown">
                        <a href="">HealthLocate  <i class="fas fa-chevron-down"></i></a>
                        <div>
                            <Link to='/doctors'>Doctor</Link>
                            <Link to='/facility'>Health Facility</Link>
                        </div>
                    </div>
                    </li>
                    <li>
                        <Link to="/blog">Health Tips</Link>
                    </li>
                    <li>
                        <Link to="/book">AppointMed</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar