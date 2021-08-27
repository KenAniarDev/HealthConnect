import React from 'react'
import { Link } from 'react-router-dom'
import Doctor from '../img/doctor.png'

export const Home = () => {
    return (
        <div class="container">
            <section className="half-text-half-slider">
                <div className="half-text">
                    <div>
                    <h1>LOREM IPSUM DOLOR SIT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor eget felis pretium sagittis. Sed vitae laoreet enim, id lobortis diam. Curabitur quis commodo neque, vel mattis felis.</p>
                    <div className="cta">
                        <Link to='/'>
                            Learn More
                        </Link>
                        <Link to='/'>
                            Learn More
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="half-slider">
                    <img src={Doctor} alt="" />
                </div>
            </section>

            <section className="text-block">
                <p><span>HealthConnect</span> aims to ease access to medical services by providing finder and online appointment to local health facilities including hospitals, clinics, vaccination and covid testing centers, connecting patients to doctors, doctors to doctors and provide necessary information to help patients have easy access to health tips and information to help fight and mitigate the risks of their diseases.</p>
            </section>

            <section className="services">
                <div className="card">
                <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                <div className="content">
                    <h4>Lukas Graymha</h4>
                    <p> Book per diem and local assignments through the app.</p>
                    <p className="cta">
                    <Link to='/'>Learn More</Link>
                    </p>
                </div>
                </div>
                <div className="card">
                <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                <div className="content">
                    <h4>Lukas Graymha</h4>
                    <p> Book per diem and local assignments through the app.</p>
                    <p className="cta">
                    <Link to='/'>Learn More</Link>
                    </p>
                </div>
                </div>
                <div className="card">
                <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                <div className="content">
                    <h4>Lukas Graymha</h4>
                    <p> Book per diem and local assignments through the app.</p>
                    <p className="cta">
                    <Link to='/'>Learn More</Link>
                    </p>
                </div>
                </div>
            </section>

            <section className="info-items">
            <div className="container">
                <h1>How it works</h1>
                <div className="items-container">
                <div className="card">
                    <div className="content">
                    <h3><span>Sign up to get <br /> Job Notifications</span></h3>
                    <p className="text-content"> Once accepted, you’ll automatically begin to receive job requests in your area.
                    </p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h3><span>Sign up to get <br /> Job Notifications</span></h3>
                    <p className="text-content"> Once accepted, you’ll automatically begin to receive job requests in your area.
                    </p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                    <h3><span>Sign up to get <br /> Job Notifications</span></h3>
                    <p className="text-content"> Once accepted, you’ll automatically begin to receive job requests in your area.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="half-text-half-image">
                <div className="half-image">
                <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                </div>
                <div className="half-text">
                <h2>Work the way you want</h2>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing 
                    elit. Duis dignissim dolor 
                    eget felis pretium sagittis. 
                    Sed vitae laoreet enim, </p>
            
                    <span>Sign up to work </span>
                    <div className="text-side-by-side">
                    <div>
                        <h4>Lukas Graymha</h4>
                        <p> Book per diem 
                        and local assignments through
                        the app.</p>
                    </div>
                    <div>
                        <h4>Lukas Graymha</h4>
                        <p> Book per diem 
                        and local assignments through
                        the app.</p>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home