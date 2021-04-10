import React, { useState, useEffect, useContext, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBAnimation, MDBIcon } from 'mdbreact';
import { BASE_URL } from '../../5. Helper/settings';
import { SettingsContext } from '../../7. Context/SettingsContext';
import APIRequest from '../../4. Api/APIRequest';
import Loader from '../../1. Components/Loader';
import './home.css';

const HomePage = () => {
    // CONTEXT
    const { settings, settingsPrefix } = useContext(SettingsContext)

    // STATE
    const [devices, setDevices] = useState([])
    const [loading, setLoading] = useState(true)

    // GET DATA
    const getDevices = useCallback(async () => {
        try {
            const res = await APIRequest.get('user/getDevice')
            const {data} = res
            setDevices(data.data)
        } catch (err) {
            console.log(err.response)
        } finally {
            setLoading(false)
        }
    }, [])

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0,0)
        getDevices()
    }, [getDevices])

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

                {
                    loading
                    ? <Loader />
                    : (
                        <MDBAnimation type="fadeIn" className="row py-3">

                            <MDBAnimation type="slideInRight" className="col-md-4 d-flex align-items-center justify-content-center">
                                <NavLink
                                    to={`/catalog/${devices ? devices[0].id : 0}`}
                                    className="w-responsive hover-up shadow"
                                >
                                    <div className="card-body text-center">
                                        <MDBIcon icon="desktop" size="4x" className="red-text" />
                                    </div>
                                    <div className="card-footer bg-danger text-white text-center">
                                        {devices[0].name}
                                    </div>
                                </NavLink>
                            </MDBAnimation>

                            <div id="logo-home" className="col-md-4" style={{ zIndex:99 }}>
                                <img
                                    className="img-fluid rounded"
                                    alt={settings ? settings.name : ""}
                                    src={settings ? BASE_URL + settingsPrefix + '/' + settings.icon_shop : ""}
                                />
                            </div>

                            <MDBAnimation type="slideInLeft" className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                                <NavLink
                                    to={`/catalog/${devices ? devices[1].id : 0}`}
                                    className="w-responsive hover-up shadow"
                                >
                                    <div className="card-body text-center">
                                        <MDBIcon fab icon="playstation" size="4x" className="indigo-text" />
                                    </div>
                                    <div className="card-footer bg-primary text-white text-center">
                                        {devices[1].name}
                                    </div>
                                </NavLink>
                            </MDBAnimation>

                        </MDBAnimation>
                    )
                }

            </div>
        </div>
    );
};

export default HomePage;