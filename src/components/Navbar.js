import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
    NavLink
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,/*Button*/} from 'react-bootstrap'
  import { Home } from './Home';
  import { AllInstruments } from './AllInstruments';
  import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
  import PermIdentityIcon from '@material-ui/icons/PermIdentity';
  import SearchIcon from '@material-ui/icons/Search';
  import AllLessons from './AllLessons';
  import './NavBar.css';


export const BootstrapNavbar = () => {
    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-new">
                            <div className="container">
                            <NavLink exact to="/" className="a-logo"><img src="/img/logo.png" alt="" className="logo" componente={Home}/></NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/lessons" className="text-nav">All Lessons</Nav.Link>
                                <NavDropdown title="Instruments" id="basic-nav-dropdown" style={{color: "white"}}>
                                    <NavDropdown.Item className="text-nav drop-text" href="#action/3.1">Violin</NavDropdown.Item>
                                    <NavDropdown.Item className="text-nav drop-text" href="#action/3.2">Acoustic Guitar</NavDropdown.Item>
                                    <NavDropdown.Item className="text-nav drop-text" href="#action/3.3">Drums</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="text-nav drop-text" href="#action/3.4">More Instruments</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                                <Form inline className="search">
                                {/* <Button variant="outline-success">Search</Button> */}
                                <FormControl type="text" placeholder="What do you want to learn today?" className="mr-sm-2"/>
                                        <SearchIcon className="lupa" />
                                </Form>
                            </Navbar.Collapse>
                            <ShoppingCartOutlinedIcon className="buy-car"/>
                            <PermIdentityIcon />
                          </div>
                        </Navbar>
                        <br />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about-us">
                                <AllLessons />
                            </Route>
                            <Route path="/contact-us">
                                <AllInstruments/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )  
}
