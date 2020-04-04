import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

// LOGO
import Logo from '../../3. Assets/img/example.png';

class Navbar extends Component {
    state = {
        isOpen: false,
        authOpen: false,
        searchOpen: false
    };

    // FUNCTIONS //
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onUserLogout = () => {
        this.props.userLogout()
    }
    // FUNCTIONS //


    // MAIN RENDER
    render() {
        return (
            <MDBNavbar
                light
                fixed="top"
                expand="lg"
                color="white"
                className="py-1"
            >
                <div className="container">

                    <MDBNavbarBrand>
                        <Link to='/'>
                            <img src={Logo} alt="LOGO" height={32} />
                        </Link>
                    </MDBNavbarBrand>

                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>

                            {/* SEARCH BAR */}
                            <MDBNavItem>
                                <MDBBtn color="brown" className="px-3 py-1">
                                    <MDBIcon icon="search" />
                                </MDBBtn>
                            </MDBNavItem>
                            {/* SEARCH BAR */}

                            {
                                !this.props.username
                                ?
                                    <MDBBtn color='brown' className='px-3 py-1'>
                                        Login / Signup
                                    </MDBBtn>
                                :
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav className="d-flex align-items-center">
                                                <MDBIcon icon="user-circle" style={{ fontSize: '24px' }} />
                                                <small className="ml-2">{this.props.username}</small>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <div className="text-center grey-text px-2 mb-3">
                                                    <small>{this.props.email}</small>
                                                </div>
                                                <MDBDropdownItem>
                                                    <MDBIcon icon="tachometer-alt" className="mr-2" />Dashboard
                                            </MDBDropdownItem>
                                                <hr className="my-2" />
                                                <MDBDropdownItem onClick={this.onUserLogout}>
                                                    <MDBIcon icon="sign-out-alt" className="mr-2" />Logout
                                            </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>

                </div>
            </MDBNavbar>
        );
    }
}

export default Navbar;