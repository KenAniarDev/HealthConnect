import React from 'react'
import Fruits from '../img/fruits.jpg'

export const Blog = () => {
    return (
        <div className="container">
             <div className="blog">
                <div className="blog-container">
                    <div className="blog-items">
                        <div className="single-blog">
                            <div className="content">
                                <h2>NUTRITION AND FACTS </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="">View Website <i className="fal fa-long-arrow-right"></i></a>
                            </div>
                            <img src={Fruits} alt="" />
                        </div>
                        <div className="single-blog">
                            <div className="content">
                                <h2>Outdoor Activities
                                    Good for your Body </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="">View Website <i className="fal fa-long-arrow-right"></i></a>
                            </div>
                            <img src={Fruits} alt="" />
                        </div>
                    <div className="load-more-container">
                            <a href="" className="load-more">Load More....</a>
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
    )
}

export default Blog