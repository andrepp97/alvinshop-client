import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import './auth.css';

class Signup extends Component {
    render() {
        return (
            <div id="page-wrapper" className="d-flex align-items-center justify-content-center">
                <div className="card card-auth mt-n5">
                    <h4 className="h4-responsive text-center text-uppercase">
                        Signup
                    </h4>

                    <hr/>

                    <div>
                        <MDBInput outline label="Username" icon="user" />
                        <MDBInput outline label="Email" icon="envelope" />
                        <MDBInput outline label="Password" type="password" icon="key" />
                        <MDBInput outline label="Confirm Password" type="password" icon="lock" />
                        <div className="text-center">
                            <button className="btn btn-indigo py-2">
                                Signup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;