import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const Facility = () => {
  let [color, setColor] = useState("#ffffff");
  const [facilities, setFacilities] = useState(null);
  const getFacilities = async () => {
    try {
      const res = await axios.get("http://localhost:1337/health-facilities");
      const data = await res.data;
      setFacilities(data);
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    getFacilities();
  }, []);

  const override = css`
    display: block;
    margin: 100px auto;
    border-color: #576ef2;
  `;

  if (facilities == null) {
    return (
      <ClipLoader
        color={color}
        loading={true}
        css={override}
        size={150}
        loader={"RingLoader"}
      />
    );
  }
  return (
    <div className="container">
      <section className="search-block">
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search" />
            <div className="dropdown">
              <button>
                Types of Clinics
                <i className="fas fa-chevron-down"></i>
              </button>
              <div>
                <a href="">Cardiology</a>
                <a href="">Dentistry</a>
                <a href="">Dermatology</a>
                <a href="">Gastroenterology</a>
              </div>
            </div>
            <Link to="/map">
              <i className="fad fa-map"></i>Open Map
            </Link>
          </form>
        </div>
        <div className="filter">
          <a href="" className="active">
            All
          </a>
          <a href="">Hospital</a>
          <a href="">Clinic</a>
          <a href="">Pharmacy</a>
          <a href="">Vaccination Center</a>
          <a href="">Swab Testing Center</a>
        </div>

        <div className="search-results">
          {facilities.map((facility) => (
            <div className="search-item">
              <Link to="/hospital">
                <img
                  src={`http://localhost:1337${facility.Image.formats.thumbnail.url}`}
                  alt=""
                />
                <div className="text-content">
                  <h4>{facility.Name}</h4>
                  <small>{facility.Type}</small>
                  <span>35 km</span>
                </div>
              </Link>
            </div>
          ))}

          {/* <div className="search-item">
                        <Link to='/hospital'>
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </Link>
                    </div>
                    <div className="search-item">
                        <Link to='/hospital'>
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </Link>
                    </div>
                    <div className="search-item">
                        <Link to='/hospital'>
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </Link>
                    </div>
                    <div className="search-item">
                        <Link to='/hospital'>
                            <img src="https://dummyimage.com/600x400/9e9e9e/959499" alt="" />
                            <div className="text-content">
                                <h4>Adventist Hospital</h4>
                                <small>Hospital</small>
                                <span>35 km</span>
                            </div>
                        </Link>
                    </div> */}
        </div>
        <div className="load-more-container">
          <a href="" className="load-more">
            Load More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Facility;
