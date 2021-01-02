import Axios from 'axios';

import { BASE_URL, TOKEN_PREFIX } from '../5. Helper/settings';

// GLOBAL AXIOS
const APIRequest = Axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
})

// Set JWT in Client
export const setClientToken = (data) => {
    localStorage.setItem(TOKEN_PREFIX, JSON.stringify(data))
    let config = {
        role: data.role,
        token: data.token,
    }
    APIRequest.defaults.headers = config
};

export default APIRequest;