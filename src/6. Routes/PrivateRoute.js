import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../7. Context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // CONTEXT
    const { userState } = useContext(AuthContext)

    // RENDER
    return (
        <Route
            {...rest}
            render={
                props => userState.userToken
                ? <Component {...props} />
                : <Redirect to="/" />
            }
        />
    )
        };

export default PrivateRoute;