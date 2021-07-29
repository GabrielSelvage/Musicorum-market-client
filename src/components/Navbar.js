import React from 'react'
import {
    Redirect,
    // useParams,
    NavLink
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl,/*Button*/ } from 'react-bootstrap'
import { Home } from './Home';
import SearchIcon from '@material-ui/icons/Search';
import { User } from 'react-feather';
import { ShoppingCart } from 'react-feather';
import { logout } from '../api'
import './NavBar.css';

function BootstrapNavbar({ loggedInUser, setLoggedInUser }) {
    const logoutUser = async () => {
        await logout();
        setLoggedInUser(null);
    };
    console.log(loggedInUser);
    return (
        <div className="body-navbar">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-new">
                <div className="container">
                    <NavLink exact to="/" className="a-logo"><img src="/img/logo.png" alt="" className="logo" componente={Home} /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="text-nav lessons" to="/lessons">All Lessons</NavLink>
                            <NavDropdown title="Instruments" id="basic-nav-dropdown" style={{ color: "white" }}>
                                <NavDropdown.Item className="text-nav drop-text" href="/instruments">Violin</NavDropdown.Item>
                                <NavDropdown.Item className="text-nav drop-text" href="/instruments">Acoustic Guitar</NavDropdown.Item>
                                <NavDropdown.Item className="text-nav drop-text" href="/instruments">Drums</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="text-nav drop-text" href="/instruments">More Instruments</NavDropdown.Item>
                            </NavDropdown>
                            {(loggedInUser && loggedInUser.role === 'student') && (<NavLink className="teach-lessons" to="/signup">Teach Lessons</NavLink>) }
                        </Nav>
                        <Form action="/search" method="GET" className="search">
                            {/* <Button variant="outline-success">Search</Button> */}
                            <FormControl name="q" type="text" placeholder="What do you want to learn today?" className="mr-sm-2" as="input" />
                            <SearchIcon className="lupa" />
                        </Form>
                    </Navbar.Collapse>
                    <div className="user">
                        <div className="icons">
                            <NavLink to="/shoppingcar">
                                <ShoppingCart className="buy-car" />
                            </NavLink>
                            {loggedInUser ? (
                                <>
                                    <nav class="dp-menu">
                                        <ul>
                                            <li>
                                                <a href="#"><img src={loggedInUser.imageUrl} alt="profile" className="login-user" /></a>
                                                <ul>
                                                    <li><NavLink to={`/profile/${loggedInUser._id}`}>Profile</NavLink></li>
                                                    <li><NavLink to="/account-settings">Account Settings</NavLink></li>
                                                    <li>{(loggedInUser && loggedInUser.role === 'teacher') && (<NavLink to={`/my-lessons/${loggedInUser._id}`}>My Lessons</NavLink>)}</li>
                                                    <li><NavLink to="/">
                                                        <button className="logout" onClick={logoutUser}>Logout</button>
                                                    </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </>
                            ) : (
                                <NavLink to="/login">
                                    <User className="login-user" />
                                </NavLink>
                            )}
                        </div>
                        {loggedInUser ? (<p className="welcome">Welcome, {loggedInUser.name}</p>) : (<p></p>)}
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default BootstrapNavbar;