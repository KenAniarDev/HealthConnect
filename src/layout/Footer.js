import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="footer-container">
                    <div className="socials">
                        <Link to='/'>
                        <i className="fab fa-facebook-square"></i>
                        </Link>
                        <Link to='/'>
                        <i className="fab fa-twitter-square"></i>
                        </Link>
                        <Link to='/'>
                        <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to='/'>
                        <i className="fab fa-youtube-square"></i>
                        </Link>
                        <Link to='/'>
                        <i className="fab fa-github-square"></i>  
                        </Link>
                    </div>
                    <div>
                        <h4>lorem epsum</h4>
                        <Link to='/'>lorem epsum</Link>
                        <Link to='/'>lorem epsum</Link>
                    </div>
                    <div>
                        <h4>lorem epsum</h4>
                        <Link to='/'>lorem epsum</Link>
                        <Link to='/'>lorem epsum</Link>
                    </div>
                    <div>
                        <h4>lorem epsum</h4>
                        <Link to='/'>lorem epsum</Link>
                        <Link to='/'>lorem epsum</Link>
                    </div>
                    </div>
                    <div className="bottom-bar">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor eget felis pretium sagittis.</p>
                    </div>
                </div>
                </footer>
        </Fragment>
    )
}

export default Footer