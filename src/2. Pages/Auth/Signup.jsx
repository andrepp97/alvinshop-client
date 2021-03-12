import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { MDBInput } from 'mdbreact';
import Swal from 'sweetalert2';
import './auth.css';

import { AuthContext } from '../../7. Context/AuthContext';
import AuthModal from '../../1. Components/AuthModal';
import APIRequest from '../../4. Api/APIRequest';

const Signup = () => {
    // CONTEXT
    const { userState } = useContext(AuthContext)

    // STATE
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)

    // VALIDATION
    const registerValidation = () => {
        let err = null
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

        if (password !== password2) err = "Confirm password doesn't match"
        if (password.length < 6) err = "Password must be at least 6 characters"
        if (!pattern.test(email)) err = "Email is invalid"
        if (!username) err = "Username is required"

        if (err) {
            Swal.fire({
                title: "Please Check Your Inputs",
                icon: "warning",
                text: err,
            })
        }
        return err
    }

    // SIGNUP FUNCTION
    const onUserSignup = () => {
        if (!registerValidation()) {
            setLoading(true)

            const body = {
                username,
                password,
                email,
            }

            APIRequest.post('user/register', body)
            .then(() => {
                Swal.fire({
                    title: "Successfully Registered",
                    text: "You can now login as " + username,
                    icon: "success",
                    didClose: () => setOpenAuth(true)
                })
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }
    
    // RENDER
    return userState.userToken
    ? <Redirect to='/' />
    : (
        <div id="page-wrapper" className="d-flex align-items-center justify-content-center">

            <AuthModal isOpen={openAuth} toggleAuth={() => setOpenAuth(false)} />

            <div className="card-auth shadow mt-n5">
                <h4 className="h4-responsive text-center text-uppercase">
                    Signup
                </h4>

                <hr/>

                <div>
                    <MDBInput
                        outline
                        label="Username"
                        icon="user"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <MDBInput
                        outline
                        label="Email"
                        icon="envelope"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <MDBInput
                        outline
                        label="Password"
                        type="password"
                        icon="key"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <MDBInput
                        outline
                        label="Confirm Password"
                        type="password"
                        icon="lock"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                    />
                    <div className="text-center">
                        <button
                            className="btn btn-indigo py-2"
                            onClick={onUserSignup}
                            disabled={loading}
                        >
                            {loading ? <div className="spinner-border spinner-border-sm" role="status" /> : "Signup"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
