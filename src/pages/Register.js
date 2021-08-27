import React from 'react'
import Logo from '../img/logo.svg'

export const Register = () => {
    return (
        <div className="container">
            <div className="register">
                <div className="left">
                    <a href="">
                        <img src={Logo} alt="" />
                        <p>
                            <span>Health</span> 
                        <span>Connect</span>
                        </p>
                    </a>
                    <p className="text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor eget felis pretium sagittis. Sed vitae laoreet enim, id lobortis diam. Curabitur quis commodo neque, vel mattis felis.
                    </p>
                </div>
                <div className="form-container">
                    <div className="patient-details">
                        <h2>Register</h2>
                    
                        <form>
                            <div className="form-control">
                                <label for="">First Name </label>
                                <input type="text" />
                            </div>
                            <div className="form-control">
                                <label for="">Middle Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-control">
                                <label for="">Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-control">
                                <label for="">Date of Birth (MM/DD/YYYY)</label>
                                <input type="text" />
                            </div>
                            <div className="form-control">
                                <label for="">Sex</label>
                                <div className="radio">
                                    <label for="male" className="radio">Male</label>
                                    <label for="female" className="radio">Female</label>
                                    <input id="male" type="radio" name="sex" value="male"/>
                                    <input id="female" type="radio" name="sex" value="female" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label for="">Mobile Number</label>
                                <input type="tel" />
                            </div>
                            <div className="form-control">
                                <label for="">Email</label>
                                <input type="email" placeholder="Optional" />
                            </div>
                            <div className="form-control">
                                <div className="checkbox">
                                    <input type="checkbox" id="terms" name="terms" />
                                    <label for="terms">
                                        I have read, understood, and accepted the <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register