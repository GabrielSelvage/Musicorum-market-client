import React from 'react';
import { Footer } from './Footer';
import "./Home.css"

export const Home = () => {
    return (
        <>
            <video autoPlay="true" loop="true" src="/video/video-back.mp4" className="background-home"></video>
            <div className="home">
                <div className="buttons">
                    <div className="div-btn-student">
                        <a href="#" className="btn-student">Become a Student</a>
                    </div>
                    <div className="div-btn-teacher">
                        <br/>
                        <a href="#" className="btn-teacher">Become a Teacher</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer className="footer-zindex"/>
        </>
    );
}