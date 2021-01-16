import React from 'react';
import { MDBIcon } from 'mdbreact';
import './style.css';

const StickyWhatsapp = ({settings}) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-whatsapp"
            href={settings.whatsapp_url}
        >
            <MDBIcon fab icon="whatsapp" />
        </a>
    );
};

export default StickyWhatsapp;