import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AuthContextProvider from './7. Context/AuthContext';
import SettingsContextProvider from './7. Context/SettingsContext';

// CSS
import './3. Assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-multi-carousel/lib/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </SettingsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
