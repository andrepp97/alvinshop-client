import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon, MDBTooltip,
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
        searchOpen: false,
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
                className="py-1"
                color="unique-color-dark"
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
                            <MDBTooltip placement="bottom">
                                <MDBBtn
                                    color='white'
                                    className="px-3 py-1"
                                    onClick={this.toggleSearch}
                                >
                                    <MDBIcon icon="search" className="opacity-70" />
                                </MDBBtn>
                                <span>Search</span>
                            </MDBTooltip>
                            {/* SEARCH BUTTON */}

                            {/* SEARCH MODAL */}
                            <SearchModal isOpen={this.state.searchOpen} toggleSearch={this.toggleSearch} />
                            <AuthModal isOpen={this.state.authOpen} toggleAuth={this.toggleAuth} />
                            {/* SEARCH MODAL */}

                            {/* CART */}
                            <MDBTooltip placement="bottom">
                                <Link
                                    to='/cart'
                                    className="btn btn-white pl-3 pr-2 py-1"
                                >
                                    <MDBIcon icon="shopping-cart" className="opacity-70" />
                                    <div className="badge badge-danger rounded-circle ml-1">
                                        3
                                    </div>
                                </Link>
                                <span>Shopping Cart</span>
                            </MDBTooltip>
                            {/* CART */}

                            {
                                !this.props.username
                                ?
                                    <MDBBtn
                                        color="white"
                                        className='px-3 py-1'
                                        onClick={this.toggleAuth}
                                    >
                                        <span className="opacity-70 font-weight-bold">
                                            Login / Signup
                                        </span>
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