import React, { useState, useReducer, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    // INITIAL STATE
    const initialState = {
        id: 0,
        userName: null,
        userRole: null,
        userToken: null,
        isLoading: true,
    }

    // USER REDUCER
    const userReducer = (prevState, action) => {
        switch (action.type) {
            case "LOGIN":
                return {
                    ...prevState,
                    id: action.id,
                    userName: action.username,
                    userRole: action.role,
                    userToken: action.token,
                    isLoading: false,
                }
            case "LOGOUT":
                return {...initialState, isLoading: false}
            case "LOADING_TRUE":
                return {...prevState, isLoading: true}
            case "LOADING_FALSE":
                return {...prevState, isLoading: false}
            default:
                return prevState
        }
    }

    // USER STATE FOR GLOBAL USAGE
    const [userState, dispatch] = useReducer(userReducer, initialState)

    // STATE
    const [authOpen, setAuthOpen] = useState(false)

    // TOGGLE AUTH
    const toggleAuth = () => {
        setAuthOpen(!authOpen)
    }

    // VALUES
    const values = {
        userState,
        dispatch,
        authOpen,
        toggleAuth,
    }

    // RENDER
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;