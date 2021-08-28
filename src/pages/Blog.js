import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Backpain from "../vid/backpain.mp4";
import Fruits from "../img/fruits.jpg";

export const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <div className="blog-container">
          <div className="blog-items">
            <div className="single-blog">
              <div className="content">
                <h2>Back Pain Stretch </h2>
                <small>By Dr Farah De Guzman</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <a href="">Read More</a>{" "}
                </p>
                <a href="">
                  View Website <i className="fal fa-long-arrow-right"></i>
                </a>
                <Link to="/doctors" className="connect">
                  Connect With Doctor
                  <i class="fal fa-share-alt"></i>
                </Link>
              </div>
              <div className="img-vid-container">
                <ReactPlayer url="https://www.youtube.com/watch?v=2VuLBYrgG94" />
              </div>
            </div>
            <div className="single-blog">
              <div className="content">
                <h2>Back Pain Stretch </h2>
                <small>By Dr Farah De Guzman</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <a href="">Read More</a>{" "}
                </p>
                <a href="">
                  View Website <i className="fal fa-long-arrow-right"></i>
                </a>
                <Link to="/doctors" className="connect">
                  Connect With Doctor
                  <i class="fal fa-share-alt"></i>
                </Link>
              </div>
              <div className="img-vid-container">
                <ReactPlayer url="https://www.youtube.com/watch?v=2VuLBYrgG94" />
              </div>
            </div>
            <div className="single-blog">
              <div className="content">
                <h2>Back Pain Stretch </h2>
                <small>By Dr Farah De Guzman</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <a href="">Read More</a>{" "}
                </p>
                <a href="">
                  View Website <i className="fal fa-long-arrow-right"></i>
                </a>
                <Link to="/doctors" className="connect">
                  Connect With Doctor
                  <i class="fal fa-share-alt"></i>
                </Link>
              </div>
              <div className="img-vid-container">
                <ReactPlayer url="https://www.youtube.com/watch?v=2VuLBYrgG94" />
              </div>
            </div>
            <div className="load-more-container">
              <a href="" className="load-more">
                Load More....
              </a>
            </div>
          </div>
          <div className="sidebar">
            <form action="">
              <input type="search" placeholder="Search" />
            </form>
            <ul>
              <li className="title">Categories</li>
              <li>
                <a href="">Healthy life style</a>
              </li>
              <li>
                <a href="">Disease</a>
              </li>
              <li>
                <a href="">Nutrition and Facts</a>
              </li>
              <li>
                <a href="">Healthy life style</a>
              </li>
            </ul>
            <ul>
              <li className="title">Recommended Experts</li>
              <li>
                <a href="">Doctor Strange</a>
              </li>
              <li>
                <a href="">Doctor Octopus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
