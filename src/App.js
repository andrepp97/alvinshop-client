import React, { useEffect, useContext } from 'react';
import { setClientToken } from './4. Api/APIRequest';
import { TOKEN_PREFIX } from './5. Helper/settings';
import { AuthContext } from './7. Context/AuthContext';
import { CartContext } from './7. Context/CartContext';
import { SettingsContext } from './7. Context/SettingsContext';

// COMPONENTS
import Router from './6. Routes/Router';
import Navbar from './1. Components/Navbar';
import Footer from './1. Components/Footer';
import AuthModal from './1. Components/AuthModal';
import LoadingScreen from './1. Components/LoadingScreen';
import StickyWhatsapp from './1. Components/StickyWhatsapp';

const App = () => {
    // CONTEXT
    const { userCart, getUserCart } = useContext(CartContext)
    const { getSettings, settings, settingsPrefix } = useContext(SettingsContext)
    const { userState, dispatch, authOpen, toggleAuth } = useContext(AuthContext)

    // LIFECYCLE
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem(TOKEN_PREFIX))

        const restoreToken = async () => {
            if (userToken) {
                setClientToken(userToken)
                dispatch({
                    type: "LOGIN",
                    ...userToken
                })
            } else {
                // console.log('Unauthorized')
                dispatch({
                    type: "LOGOUT"
                })
            }
        }

        getSettings()
        restoreToken()
        if (userToken) getUserCart()
    }, [dispatch, getSettings, getUserCart])

    // RENDER
    return userState.isLoading
        ? <LoadingScreen />
        : (
            <div>
                <AuthModal
                    isOpen={authOpen}
                    toggleAuth={toggleAuth}
                />
                <Navbar
                    settings={settings}
                    prefix={settingsPrefix}
                    toggleAuth={toggleAuth}
                    userCart={userCart}
                />
                <Router />
                <Footer settings={settings} />
                <StickyWhatsapp settings={settings} />
            </div>
        );
};

export default App;