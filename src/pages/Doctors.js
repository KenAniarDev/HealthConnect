import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const Doctors = () => {
  let [color, setColor] = useState("#ffffff");
  const [doctors, setDoctor] = useState(null);
  const getdoctor = async () => {
    try {
      const res = await axios.get("http://localhost:1337/doctors");
      const data = await res.data;
      setDoctor(data);
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    getdoctor();
  }, []);

  const override = css`
    display: block;
    margin: 100px auto;
    border-color: #576ef2;
  `;

  if (doctors == null) {
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
      <section className="search-block doctor">
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
          {doctors.map((doctor) => (
            <div className="search-item">
              <img
                src={`http://localhost:1337${doctor.ProfileImage.formats.thumbnail.url}`}
                alt=""
              />
              <div className="text-content">
                <div>
                  <h4>{doctor.Name}</h4>
                  <small>{doctor.Type}</small>
                </div>
                <Link to="/book">Book Now</Link>
              </div>
            </div>
          ))}
          {/* <div className="search-item">
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

export default Doctors;
