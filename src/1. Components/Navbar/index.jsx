import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import {
    MDBBtn, MDBIcon, MDBTooltip,
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
    MDBNavItem, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import { AuthContext } from '../../7. Context/AuthContext';
import { TOKEN_PREFIX } from '../../5. Helper/settings';

// COMPONENTS
import SearchModal from './components/SearchModal';
import AuthModal from './components/AuthModal';

const Navbar = () => {
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
                        LOGO
                    </Link>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>

                        {/* SEARCH BUTTON */}
                        <MDBTooltip placement="bottom">
                            <MDBBtn
                                color='white'
                                className="px-2 py-1"
                                onClick={toggleSearch}
                            >
                                <MDBIcon icon="search" className="opacity-70" />
                                <small className="d-md-none ml-2">Search</small>
                            </MDBBtn>
                            <span>Search</span>
                        </MDBTooltip>
                        {/* SEARCH BUTTON */}

                        {/* SEARCH MODAL */}
                        <SearchModal isOpen={searchOpen} toggleSearch={toggleSearch} />
                        <AuthModal isOpen={authOpen} toggleAuth={toggleAuth} />

                        {
                            !userState.userToken
                            ?
                                <MDBBtn
                                    color="white"
                                    className='px-3 py-1'
                                    onClick={toggleAuth}
                                >
                                    <span className="opacity-70 font-weight-bold">
                                        Login / Signup
                                    </span>
                                </MDBBtn>
                            :
                            <>
                                <MDBTooltip placement="bottom">
                                    <Link
                                        to='/cart'
                                        onClick={() => setIsOpen(false)}
                                        className="btn btn-white pl-3 pr-2 py-1"
                                    >
                                        <MDBIcon icon="shopping-cart" className="opacity-70" />
                                        <div className="badge badge-danger rounded-circle ml-1">
                                            3
                                        </div>
                                    </Link>
                                    <span>Shopping Cart</span>
                                </MDBTooltip>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav className="d-flex align-items-center">
                                            <MDBIcon icon="user-circle" style={{ fontSize: '24px' }} />
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