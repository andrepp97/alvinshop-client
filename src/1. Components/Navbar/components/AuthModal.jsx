import React from 'react';
import { MDBModal, MDBModalBody, MDBInput } from 'mdbreact';

const AuthModal = ({ isOpen, toggleAuth }) => {
    return (
        <MDBModal isOpen={isOpen} toggle={toggleAuth} centered>

            <div style={{ height: '25px' }}>
                <span id="close-btn" onClick={toggleAuth}>
                    <i className="fa fa-times" />
                </span>
            </div>

            <MDBModalBody className="pt-0 px-4 my-3">

                <h4 className="h4-responsive text-center text-uppercase">
                    Login
                </h4>

                <hr/>

                <div>
                    <MDBInput outline label="Username" icon="user" />
                    <MDBInput outline label="Password" type="password" icon="key" />
                    <button
                        className="btn btn-block btn-indigo font-weight-bold px-3 py-2"
                        style={{ letterSpacing: '1px' }}
                    >
                        <i className="fa fa-sign-in-alt mr-2" />
                        Login
                    </button>
                </div>

                <div className="text-center mt-4">
                    <span>Don't have an account ? </span>
                    <a href='/signup'>Signup Here</a>
                </div>

            </MDBModalBody>

        </MDBModal>
    );
};

export default AuthModal;