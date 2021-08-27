import React, { useState } from 'react'
import Profile from '../img/profile.jpg'

export const Book = () => {
    const [steps, setSteps] = useState([true, false, false, false])
    return (
        <div className="container">
            <div className="book">
                <div className={steps[0] ? 'initial active' : 'initial'}>
                    <img src={Profile} alt="" />
                    <h4>Hi Im Dr. <span>Farah De Guzman</span> </h4>
                    <p>To request for a Virtual or Face-to-Face Appointment, please answer the following...</p>
                    <div className="cta">
                        <a href="">I'm an Existing Patient</a>
                        <a href="" className="new">I'm a New Patient</a>
                    </div>
                </div>
                <div className={steps[1] ? 'new-patient active' : 'new-patient'}>
                    <h2>Im a new Patient</h2>
                    <form>
                        <div className="form-control">
                            <label for="">I would like to request for a</label>
                            <select name="" id="">
                                <option value="">Select consulation type</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label for="">Which clinic and schedule is most convienent for you</label>
                            <select name="" id="">
                                <option value="">Please select consultation type first</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label for="">Scheduled on</label>
                            <select name="" id="">
                                <option value="">Select an appointment date </option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label for="">Reason for booking / chief complaint  </label>
                            <input type="text" />
                        </div>
                    </form>
                </div>
                <div className={steps[2] ? 'patient-details active' : 'patient-details'}>
                    <h2>Patient Details</h2>
                    <p className="sub-text">Patient details are required for your medical record. 
                        Please fill in all the details below.</p>
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
                                <input id="male" type="radio" name="sex" value="male" />
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
                    </form>
                </div>
                <a href="" className="continue">Continue</a>
                <div className="progress-bullets">
                    <a className={steps[0] && 'active'} onClick={() => setSteps([true, false, false, false])}>
                        <i className="fas fa-circle"></i>
                    </a>
                    <a className={steps[1] && 'active'} onClick={() => setSteps([true, true, false, false])}>
                        <i className="fas fa-circle"></i>
                    </a>
                    <a className={steps[2] && 'active'} onClick={() => setSteps([true, true, true, false])}>
                        <i className="fas fa-circle"></i>
                    </a>
                    <a className={steps[3] && 'active'} onClick={() => setSteps([true, true, true, true])}>
                        <i className="fas fa-circle"></i>
                    </a>
                </div>
                <a className="back">
                    <i className="far fa-chevron-left"></i> 
                    Back
                </a>
            </div>

            <div className={steps[3] ? 'book-modal active' : 'book-modal'}>
                <div className="modal-container">
                    <div className="progress-bullets">
                        <a className="active">
                            <i className="fas fa-circle"></i>
                        </a>
                        <a href="">
                            <i className="fas fa-circle"></i>
                        </a>
                        <a href="">
                            <i className="fas fa-circle"></i>
                        </a>
                        <a href="">
                            <i className="fas fa-circle"></i>
                        </a>
                    </div>
                
                    <h4>We’re Almost there</h4>
                    <p>To verify your account, enter the 6-digit code sent to</p>
                
                    <p>+639*****6823</p>
                
                    <form>
                        <div>
                            <input type="text" pattern="[0-9]+" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                            <input type="text" pattern="[0-9]+" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                            <input type="text" pattern="[0-9]+" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                            <input type="text" pattern="[0-9]+" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />
                        </div>
                        <a href="">Clear</a>
                    </form>
                    <p>Code has been sent to your mobile.</p>
                    <a href="" className="continue">Continue</a>
                    <p>Didn't received the code? <a href="">Resend Code</a></p>
                </div>
            </div>
        </div>
    )
}

export default Book