import React from 'react';
import { Footer } from './Footer';
import "./Home.css"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="body-home">
            <video autoPlay loop src="https://res.cloudinary.com/gabrieldev/video/upload/v1627468490/video-back_u6glab.mp4" className="background-home"></video>
            <div className="home">
                <div className="buttons">
                    <div className="div-btn-student">
                        <NavLink to="/signup" className="btn-student">{t('become_a_student')}</NavLink>
                    </div>
                    <div className="div-btn-teacher">
                        <br />
                        <NavLink className="btn-teacher" to={{
                            pathname: '/signup',
                            initialState: 1
                        }}>{t('become_a_teacher')}</NavLink>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer className="footer-zindex" />
        </div>

    );
}