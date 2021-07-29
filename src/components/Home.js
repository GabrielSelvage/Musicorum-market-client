import React from 'react';
import { Footer } from './Footer';
import "./Home.css"
import ReactPlayer from 'react-player'

export const Home = () => {
    return (
        <div className="body-home">
            {/* <ReactPlayer playing url={"/video/video-back.mp4"} className="background-home" /> */}
            <video autoPlay loop muted src="https://res.cloudinary.com/gabrieldev/video/upload/v1627468490/video-back_u6glab.mp4" className="background-home"></video>
            <div className="home">
                <div className="buttons">
                    <div className="div-btn-student">
                        <a href="/signup" className="btn-student">Become a Student</a>
                    </div>
                    <div className="div-btn-teacher">
                        <br />
                        <a href="/beteacher" className="btn-teacher">Become a Teacher</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer className="footer-zindex" />
        </div>
    );
}