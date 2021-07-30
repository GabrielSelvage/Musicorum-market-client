import React from 'react';
import { Footer } from './Footer';
import "./Home.css"
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <div className="body-home">
            <video autoPlay loop muted src="https://res.cloudinary.com/gabrieldev/video/upload/v1627468490/video-back_u6glab.mp4" className="background-home"></video>
            <div className="home">
                <div className="buttons">
                    <div className="div-btn-student">
                        <NavLink to="/signup" className="btn-student">Become a Student</NavLink>                        
                    </div>
                    <div className="div-btn-teacher">
                        <br />
                        <NavLink className="btn-teacher" to={{
                            pathname: '/signup',
                            initialState: 1
                        }}> Become a Teacher </NavLink>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer className="footer-zindex" />
        </div>

    );
}