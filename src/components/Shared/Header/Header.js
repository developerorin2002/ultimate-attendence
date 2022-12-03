import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="container">
                    
                    <div className="col-lg-10">
                        <Navbar bg="light" expand="lg">
                            <Container fluid>
                                <Navbar.Brand><img src={logoImg} className="w-100 img-fluid" alt="" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="ms-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Link to="/login" className="nav-link-cs text-center">Login</Link>
                                        <Link to="/signup" className="nav-link-cs text-center">SignUp</Link>
                                        <Link to="/attendence" className="nav-link-cs text-center">Attendence</Link>

                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                
            </div>
        </div>
    );
};

export default Header;