import React from 'react'
import {
    // useParams,
    NavLink
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,/*Button*/} from 'react-bootstrap'
  import { Home } from './Home';
  import SearchIcon from '@material-ui/icons/Search';
  import { User } from 'react-feather';
  import { ShoppingCart } from 'react-feather';
  import './NavBar.css';

export const BootstrapNavbar = () => {
    return(
        <div className="body-navbar">
         <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-new">
                <div className="container">
                <NavLink exact to="/" className="a-logo"><img src="/img/logo.png" alt="" className="logo" componente={Home}/></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink className="text-nav lessons" to="/lessons">All Lessons</NavLink>
                    <NavDropdown title="Instruments" id="basic-nav-dropdown" style={{color: "white"}}>
                        <NavDropdown.Item className="text-nav drop-text" href="/instruments">Violin</NavDropdown.Item>
                        <NavDropdown.Item className="text-nav drop-text" href="/instruments">Acoustic Guitar</NavDropdown.Item>
                        <NavDropdown.Item className="text-nav drop-text" href="/instruments">Drums</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-nav drop-text" href="/instruments">More Instruments</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline action="/search" method="GET" className="search">
                    {/* <Button variant="outline-success">Search</Button> */}
                    <FormControl type="text" placeholder="What do you want to learn today?" className="mr-sm-2" as="input" />
                            <SearchIcon className="lupa" />
                    </Form>
                </Navbar.Collapse>
                <NavLink to="/shoppingcar">
                    <ShoppingCart className="buy-car"/>
                </NavLink>
                <NavLink to="/login">
                    <User className="login-user"/>
                </NavLink>
                </div>
            </Navbar>
        </div>
    )  
}
