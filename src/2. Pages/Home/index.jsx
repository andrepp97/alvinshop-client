import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBAnimation, MDBIcon } from 'mdbreact';
import Logo from '../../3. Assets/img/example.png';
import './home.css';

const HomePage = () => {
    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div id="page-wrapper">
            <div className="container h-100">

                <h2 className="text-center animation fadeInDown h2-responsive pt-3" style={{ letterSpacing: '2px' }}>
                    WELCOME TO GAMING REVOLUTION
                </h2>

                <MDBAnimation type="fadeIn" delay=".5s" className="container">
                    <hr className="my-5" />
                </MDBAnimation>

                <MDBAnimation type="fadeIn" className="row py-3">

                    <MDBAnimation type="slideInRight" className="col-md-4 d-flex align-items-center justify-content-center">
                        <NavLink
                            to={{
                                pathname: "/catalog",
                                state: {
                                    data: "PC"
                                }
                            }}
                            className="card w-responsive hover-up"
                        >
                            <div className="card-body text-center">
                                <MDBIcon icon="desktop" size="4x" className="red-text" />
                            </div>
                            <div className="card-footer bg-danger text-white text-center">
                                Aksesoris PC
                            </div>
                        </NavLink>
                    </MDBAnimation>

                    <div id="logo-home" className="col-md-4" style={{ zIndex:999 }}>
                        <img src={Logo} className="img-thumbnail img-fluid rounded-circle shadow" alt=""/>
                    </div>

                    <MDBAnimation type="slideInLeft" className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                        <NavLink
                            to={{
                                pathname: "/catalog",
                                state: {
                                    data: "Playstation"
                                }
                            }}
                            className="card w-responsive hover-up"
                        >
                            <div className="card-body text-center">
                                <MDBIcon fab icon="playstation" size="4x" className="indigo-text" />
                            </div>
                            <div className="card-footer bg-primary text-white text-center">
                                Playstation
                            </div>
                        </NavLink>
                    </MDBAnimation>

                </MDBAnimation>

            </div>
        </div>
    );
};

export default HomePage;