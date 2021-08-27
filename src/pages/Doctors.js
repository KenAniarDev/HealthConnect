import React from 'react'

export const Doctors = () => {
    return (
        <div className="container">
            <section className="search-block">
                <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search" />
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
                        <a href=""><i className="fad fa-map"></i>Open Map</a>
                    </form> 
                </div>
                <div className="filter">
                    <a href="" className="active">All</a>
                    <a href="">Hospital</a>
                    <a href="">Clinic</a>
                    <a href="">Pharmacy</a>
                    <a href="">Vaccination Center</a>
                    <a href="">Swab Testing Center</a>
                </div>

                <div className="search-results">
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                    <div className="search-item">
                        <a href="#">
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="load-more-container">
                    <a href="" className="load-more">Load More</a>
                </div>
                
            </section>
        </div>
    )
}

export default Doctors