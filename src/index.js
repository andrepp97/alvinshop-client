import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AuthContextProvider from './7. Context/AuthContext';
import CartContextProvider from './7. Context/CartContext';
import SettingsContextProvider from './7. Context/SettingsContext';

// CSS
import './3. Assets/css/index.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-multi-carousel/lib/styles.css';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AuthContextProvider>
      </SettingsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
