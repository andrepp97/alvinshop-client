import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import Logo from '../../3. Assets/img/example.png';

class HomePage extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="container h-100">

                    <h2 className="mb-5">HALO DUNIA</h2>

                    <div className="row">

                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <Link to="/aksesoris-pc" className="card w-responsive hoverable">
                                <div className="card-body text-center">
                                    <MDBIcon icon="desktop" size="4x" className="red-text" />
                                </div>
                                <div className="card-footer bg-danger text-white text-center">
                                    Aksesoris PC
                                </div>
                            </Link>
                        </div>

                        <div id="logo-home" className="col-md-4">
                            <img src={Logo} className="img-thumbnail img-fluid rounded-circle shadow" alt=""/>
                        </div>

                        <div className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                            <Link to="/playstation" className="card w-responsive hoverable">
                                <div className="card-body text-center">
                                    <MDBIcon fab icon="playstation" size="4x" className="indigo-text" />
                                </div>
                                <div className="card-footer bg-primary text-white text-center">
                                    Playstation
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;