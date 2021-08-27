import React from 'react'


export const Map = () => {
    return (
        <div className="container">
            <section className="map">
                <h4>Legends</h4>
                <div className="controls">
                    <div className="left">
                        <div className="markers">
                            <a href="">
                                <i className="fas fa-male"></i>
                                Your Location
                            </a>
                            <a href="">
                                <i className="fas fa-map-marker-alt"></i>
                                Hospital
                            </a>
                            <a href="">
                                <i className="fas fa-map-marker-alt"></i>
                                Pharmacy
                            </a>
                            <a href="">
                                <i className="fas fa-map-marker-alt"></i>
                                Clinic
                            </a>
                            <a href="">
                                <i className="fas fa-map-marker-alt"></i>
                                Custom
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <a href="">Help</a>
                        <a href="">Settings</a>
                    </div>
                </div>
                <div className="mapDiv">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.858313395835!2d118.74987571446212!3d9.778054179499977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b56377237188c9%3A0xabe95b94195c3aff!2sSan%20Manuel%20Road%2C%20Puerto%20Princesa%2C%20Palawan!5e0!3m2!1sen!2sph!4v1630018235774!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    <div className="map-controls">
                        <div className="left">
                            <p>From</p>
                            <div className="dropdown">
                                <button>
                                    <i className="fas fa-male"></i>
                                    3600 MP, Road LAGUNA
                                </button>
                            </div>
                        </div>
                        <div className="right">
                            <p>To</p>
                            <div className="dropdown">
                                <button>
                                    Select Location
                                    <i className="fas fa-map-marker-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Map