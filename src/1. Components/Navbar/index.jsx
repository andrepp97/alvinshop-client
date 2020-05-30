import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

// COMPONENTS
import SearchModal from './components/SearchModal';
import AuthModal from './components/AuthModal';

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
        this.setState({ isOpen: !this.state.isOpen })
    }

    toggleSearch = () => {
        this.setState({ searchOpen: !this.state.searchOpen })
    }

    toggleAuth = () => {
        this.setState({ authOpen: !this.state.authOpen })
    }

    onUserLogout = () => {
        this.props.userLogout()
    }
    // FUNCTIONS //


    // MAIN RENDER
    render() {
        return (
            <MDBNavbar
                dark
                fixed="top"
                expand="lg"
                color="unique-color-dark"
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

                            {/* SEARCH BUTTON */}
                            <MDBNavItem>
                                <MDBBtn color='mdb-color' className="px-3 py-1" onClick={this.toggleSearch}>
                                    <MDBIcon icon="search" />
                                </MDBBtn>
                            </MDBNavItem>
                            {/* SEARCH BUTTON */}

                            {/* SEARCH MODAL */}
                            <SearchModal isOpen={this.state.searchOpen} toggleSearch={this.toggleSearch} />
                            <AuthModal isOpen={this.state.authOpen} toggleAuth={this.toggleAuth} />
                            {/* SEARCH MODAL */}

                            {
                                !this.props.username
                                ?
                                    <MDBBtn color='mdb-color' className='px-3 py-1' onClick={this.toggleAuth}>
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