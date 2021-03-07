import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import {
    MDBIcon, MDBNavbar,
    MDBNavbarBrand, MDBNavbarNav,
    MDBNavItem, MDBNavbarToggler,
    MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";
import './navbar.css';

import { AuthContext } from '../../7. Context/AuthContext';
import { TOKEN_PREFIX, BASE_URL } from '../../5. Helper/settings';

// COMPONENTS
import SearchModal from './components/SearchModal';
import AuthModal from './components/AuthModal';

const Navbar = ({settings, prefix, userCart}) => {
    // CONTEXT
    const {userState, dispatch} = useContext(AuthContext)

    // STATE
    const [isOpen, setIsOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    // LIFECYCLE
    useEffect(() => {
        if (userState.userToken) setAuthOpen(false)
    }, [userState.userToken])

    // TOGGLE MODAL
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }

    const toggleAuth = () => {
        setAuthOpen(!authOpen)
    }

    // LOGOUT FUNCTION
    const onUserLogout = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem(TOKEN_PREFIX)
    }
    
    // RENDER
    return (
        <MDBNavbar
            light
            fixed="top"
            expand="md"
            color="white"
            className="py-1"
        >
            <div className="container">

                <MDBNavbarBrand>
                    <Link to='/' className="font-weight-bold brown-text spacing-1">
                        <img
                            src={settings ? BASE_URL + prefix + '/' + settings.icon_shop : null}
                            alt={settings ? settings.name : ""}
                            height={32}
                        />
                    </Link>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>

                        {/* SEARCH BUTTON */}
                        <button
                            className="btn-navbar"
                            onClick={toggleSearch}
                        >
                            <MDBIcon icon="search" />
                            <small className="d-md-none ml-2">Search</small>
                        </button>

                        {/* MODAL */}
                        <SearchModal isOpen={searchOpen} toggleSearch={toggleSearch} />
                        <AuthModal isOpen={authOpen} toggleAuth={toggleAuth} />

                        {
                            !userState.userToken
                            ?
                                <button
                                    className='btn-navbar'
                                    onClick={toggleAuth}
                                >
                                    Login / Signup
                                </button>
                            :
                            <>
                                <Link
                                    to='/cart'
                                    className="btn-navbar"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <MDBIcon icon="shopping-cart" />
                                    {userCart && <span className="cart-badge">{userCart.length}</span>}
                                </Link>
                                <MDBNavItem>
                                    <MDBDropdown className="mx-1">
                                        <MDBDropdownToggle nav>
                                            <MDBIcon icon="user-circle" />
                                            <small className="ml-2">{userState.userName}</small>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem onClick={onUserLogout}>
                                                <MDBIcon icon="sign-out-alt" className="mr-2" />
                                                Logout
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </>
                        }
                    </MDBNavbarNav>
                </MDBCollapse>

            </div>
        </MDBNavbar>
    );
};

export default Navbar;