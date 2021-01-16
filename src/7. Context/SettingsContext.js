import React, { useState, createContext, useCallback } from 'react';
import APIRequest from '../4. Api/APIRequest';
import { SETTINGS_PREFIX } from '../5. Helper/settings';

export const SettingsContext = createContext();

const SettingsContextProvider = (props) => {
    // STATE
    const [settings, setSettings] = useState(null)
    const [settingsPrefix, setSettingsPrefix] = useState('')

    // GET SETTINGS
    const getSettings = useCallback(() => {
        let localSettings = JSON.parse(localStorage.getItem(SETTINGS_PREFIX))
        if (localSettings) {
            setSettings(localSettings.data)
            setSettingsPrefix(localSettings.prefix)
        } else {
            APIRequest.get('user/getSettings')
            .then(({data}) => {
                setSettings(data.data.data)
                setSettingsPrefix(data.data.prefix)
                localStorage.setItem(SETTINGS_PREFIX, JSON.stringify(data.data))
            })
            .catch(err => console.log(err.response))
        }
    }, [])

    // VALUES
    const values = {
        getSettings,
        settings,
        settingsPrefix,
    }

    // RENDER
    return (
        <SettingsContext.Provider value={values}>
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsContextProvider;