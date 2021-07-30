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
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'
import i18next from 'i18next';
import './NavBar.css';

const languages = [
    {
        code: 'pt',
        name: 'Português',
        country_code: 'pt',
        lang: "Língua",
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'en',
        lang: "Language",
    },
]

function BootstrapNavbar({ loggedInUser, setLoggedInUser }) {
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode);

    const handleLangChange = (e) => {
        i18next.changeLanguage(e.target.value);
    };

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
                            <NavLink className="text-nav lessons" to="/lessons">{t('all_lessons')}</NavLink>
                            <NavDropdown title={t('instruments')} id="basic-nav-dropdown" style={{ color: "white" }}>
                                <NavDropdown.Item >
                                    <NavLink className="text-nav drop-text" to='/instruments/violin'> Violin </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className="text-nav drop-text" to='/instruments/guitar'> Acoustic Guitar </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <NavLink className="text-nav drop-text" to='/instruments/piano'> Piano </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {(loggedInUser && loggedInUser.role === 'student') && (<NavLink className="teach-lessons" to="/signup">{t('teach_lessons')}</NavLink>)}
                        </Nav>
                        <Form action="/search" method="GET" className="search">
                            {/* <Button variant="outline-success">Search</Button> */}
                            <FormControl name="q" type="text" placeholder={t('what_today')} className="mr-sm-2" as="input" />
                            <SearchIcon className="lupa" />
                        </Form>
                    </Navbar.Collapse>
                    <div className="selectLangDiv">
                        <select onChange={handleLangChange} className="selectLanguages" >
                            {languages.map(({ code, name, country_code }) => (
                                <>
                                    <option value="" selected disabled hidden>{currentLanguage.lang}</option>
                                    <option key={code} value={country_code}>{name}</option>
                                </>
                            ))}
                        </select>
                    </div>

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
                                                    <li><NavLink to="/profile">Profile</NavLink></li>
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