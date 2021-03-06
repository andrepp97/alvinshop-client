import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBAnimation, MDBIcon } from 'mdbreact';
import { BASE_URL } from '../../5. Helper/settings';
import { SettingsContext } from '../../7. Context/SettingsContext';
import './home.css';

const HomePage = () => {
    // CONTEXT
    const { settings, settingsPrefix } = useContext(SettingsContext)

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    // RENDER
    return (
        <div id="page-wrapper">
            <div className="container h-100">

                <h2 className="h2-responsive animation fadeInDown headline-text">
                    WELCOME TO GAMING REVOLUTION
                </h2>

                <MDBAnimation type="fadeIn" delay=".5s" className="container">
                    <hr className="my-5" />
                </MDBAnimation>

                <MDBAnimation type="fadeIn" className="row py-3">

                    <MDBAnimation type="slideInRight" className="col-md-4 d-flex align-items-center justify-content-center">
                        <NavLink
                            to={`/catalog/pc`}
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

                    <div id="logo-home" className="col-md-4" style={{ zIndex:99 }}>
                        <img
                            className="img-thumbnail"
                            alt={settings ? settings.name : ""}
                            src={settings ? BASE_URL + settingsPrefix + '/' + settings.icon_shop : ""}
                        />
                    </div>

                    <MDBAnimation type="slideInLeft" className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                        <NavLink
                            to={`/catalog/playstation`}
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