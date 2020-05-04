import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBAnimation, MDBIcon } from 'mdbreact';
import Logo from '../../3. Assets/img/example.png';
import './home.css';

class HomePage extends Component {
    render() {
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
                            <Link to="/aksesoris-pc" className="card w-responsive hover-up">
                                <div className="card-body text-center">
                                    <MDBIcon icon="desktop" size="4x" className="red-text" />
                                </div>
                                <div className="card-footer bg-danger text-white text-center">
                                    Aksesoris PC
                                </div>
                            </Link>
                        </MDBAnimation>

                        <div id="logo-home" className="col-md-4" style={{ zIndex:999 }}>
                            <img src={Logo} className="img-thumbnail img-fluid rounded-circle shadow" alt=""/>
                        </div>

                        <MDBAnimation type="slideInLeft" className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                            <Link to="/playstation" className="card w-responsive hover-up">
                                <div className="card-body text-center">
                                    <MDBIcon fab icon="playstation" size="4x" className="indigo-text" />
                                </div>
                                <div className="card-footer bg-primary text-white text-center">
                                    Playstation
                                </div>
                            </Link>
                        </MDBAnimation>

                    </MDBAnimation>

                </div>
            </div>
        );
    }
}

export default HomePage;