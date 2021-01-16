import React, { useEffect, useContext } from 'react';
import { setClientToken } from './4. Api/APIRequest';
import { TOKEN_PREFIX } from './5. Helper/settings';
import { AuthContext } from './7. Context/AuthContext';
import { SettingsContext } from './7. Context/SettingsContext';

// COMPONENTS
import Router from './6. Routes/Router';
import Navbar from './1. Components/Navbar';
import Footer from './1. Components/Footer';
import LoadingScreen from './1. Components/LoadingScreen';
import StickyWhatsapp from './1. Components/StickyWhatsapp';

const App = () => {
  // CONTEXT
  const { userState, dispatch } = useContext(AuthContext)
  const { getSettings, settings, settingsPrefix } = useContext(SettingsContext)

  // LIFECYCLE
  useEffect(() => {
    const restoreToken = () => {
      let userToken = JSON.parse(localStorage.getItem(TOKEN_PREFIX))
      if (userToken) {
        setTimeout(() => {
          setClientToken(userToken)
          dispatch({
            type: "LOGIN",
            ...userToken
          })
        }, 1000);
      } else {
        console.log('Unauthorized')
        dispatch({
          type: "LOGOUT"
        })
      }
    }
    
    getSettings()
    restoreToken()
  }, [dispatch, getSettings])

  // RENDER
  return userState.isLoading
  ? <LoadingScreen />
  : (
    <div>
      <Navbar settings={settings} prefix={settingsPrefix} />
      <Router />
      <Footer settings={settings} />
      <StickyWhatsapp settings={settings} />
    </div>
  );
};

export default App;