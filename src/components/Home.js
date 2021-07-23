import React from 'react';
import { Footer } from './Footer';
import "./Home.css"
import ReactPlayer from 'react-player'

export const Home = () => {
    return (
        <>
            {/* <ReactPlayer playing url={"/video/video-back.mp4"} className="background-home" /> */}
            <video autoPlay="true" loop="true" src="/video/video-back.mp4" className="background-home"></video>
            <div className="home">
                <div className="buttons">
                    <div className="div-btn-student">
                        <a href="/signup" className="btn-student">Become a Student</a>
                    </div>
                    <div className="div-btn-teacher">
                        <br/>
                        <a href="/signup" className="btn-teacher">Become a Teacher</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer className="footer-zindex"/>
        </>
    );
}