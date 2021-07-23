import React from 'react';
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" value="footer" />
            <div class="footer">
            <div class="footer-background"></div>
            <div class="registo-marca-footer"><div class="musicorum-2021-VeQGn1">© Musicorum 2021</div></div>
            <div class="categorias-footer-OpYFEQ">
                <div class="group-206-D6atBk">
                <div class="for-students-SiBJct footer-title">For Students</div>
                <a href="#" class="students-faq-SiBJct manrope-normal-white-14px">Students Faq</a>
                <a href="#" class="gift-card-SiBJct manrope-normal-white-14px">Gift Card</a>
                </div>
                <div class="group-205-D6atBk">
                <div class="for-teachers-FhKgCF footer-title">For teachers</div>
                <a href="#" class="terms-and-conditions-FhKgCF manrope-normal-white-14px">Terms and Conditions</a>
                <a href="#" class="sellers-faq-FhKgCF manrope-normal-white-14px">Sellers Faq</a>
                <a href="#" class="how-to-sell-FhKgCF manrope-normal-white-14px">How to Sell</a>
                </div>
                <div class="group-204-D6atBk">
                <div class="about-us-title footer-title">About Us</div>
                <a href="#" class="about-us-subtitle">About Us</a>
                <a href="#" class="press-QxQr1H manrope-normal-white-14px">Press</a>
                <a href="#" class="affiliates-QxQr1H manrope-normal-white-14px">Affiliates</a>
                </div>
                <div class="group-207-D6atBk">
                <div class="top-categories-ucallr footer-title">Top Categories</div>
                <a href="#" class="guitar-ucallr manrope-normal-white-14px">Guitar</a>
                <a href="#" class="drums-ucallr manrope-normal-white-14px">Drums</a>
                <a href="#" class="piano-ucallr manrope-normal-white-14px">Piano</a>
                </div>
            </div>
            <div class="frame-footer-icons-OpYFEQ">
                <div class="footer-icons">
                <a href="#" class="facebook-icon-dJH0wx">
                    <FacebookIcon className="facebook-icon"/>
                </a>
                <a href="https://www.instagram.com/gabrielselvage/"  target="blank" class="instagram-icon-dJH0wx">
                    <InstagramIcon className="instagram-icon"/>
                </a>
                <a href="#" class="twiiter-icon-dJH0wx">
                    <TwitterIcon className="twitter-icon"/>
                </a>
                </div>
            </div>
            </div>
        </div>
    );
}