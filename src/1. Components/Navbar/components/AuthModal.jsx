import React, { useState, useContext } from 'react';
import {
    MDBInput,
    MDBModal,
    MDBModalBody,
} from 'mdbreact';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../7. Context/AuthContext';
import APIRequest, { setClientToken } from '../../../4. Api/APIRequest';

const AuthModal = ({ isOpen, toggleAuth }) => {
    // CONTEXT
    const { dispatch } = useContext(AuthContext)

    // STATE
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    // VALIDATION
    const loginValidation = () => {
        let err = null

        if (password.length < 6) err = "Password must be at least 6 characters"
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

    // LOGIN FUNCTION
    const onUserLogin = () => {
        if (!loginValidation()) {
            setLoading(true)

            const body = {
                username,
                password,
            }

            APIRequest.post('user/login', body)
            .then(({data}) => {
                setClientToken(data.data)
                dispatch({
                    type: 'LOGIN',
                    ...data.data
                })
            })
            .catch(err => {
                const res = err.response
                if (res) {
                    Swal.fire({
                        title: `Error (${res.status})`,
                        text: res.data.message,
                        icon: "error",
                    })
                }
            })
            .finally(() => setLoading(false))
        }
    }

    const onKeypressLogin = (event) => {
        if (event.key === 'Enter') {
            onUserLogin()
        }
    }

    // RENDER
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
                    <MDBInput
                        outline
                        icon="user"
                        label="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onKeyUp={onKeypressLogin}
                    />
                    <MDBInput
                        outline
                        icon="key"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onKeyUp={onKeypressLogin}
                    />
                    <button
                        className="btn btn-block btn-indigo font-weight-bold px-3 py-2"
                        style={{ letterSpacing: '1px' }}
                        onClick={onUserLogin}
                        disabled={loading}
                    >
                        {loading ? <div className="spinner-border spinner-border-sm" role="status" /> : "Login"}
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