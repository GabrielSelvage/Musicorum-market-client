import React from 'react';
import {NavLink} from 'react-router-dom';
import "./NavBar.css"


function Navbar({ loggedInUser }) {
    return (
        <div className="nav-bar">
        {loggedInUser && <p>Welcome {loggedInUser.username}</p>}
            <ul>
                <div className="type">
                    <li><NavLink activeStyle={{color: "red"}} exact to="/home"><img src="/img/logo.png" alt="" className="logo"/></NavLink></li>
                </div>
                    <li><NavLink activeStyle={{color: "red"}} exact to="/lessons">All Lessons</NavLink></li>
                    <li><NavLink activeStyle={{color: "red"}} exact to="/instruments">Instruments</NavLink></li>
                    <li><NavLink activeStyle={{color: "red"}} exact to="/signup">Signup</NavLink></li>
                    <li><NavLink activeStyle={{color: "red"}} exact to="/login">Login</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
