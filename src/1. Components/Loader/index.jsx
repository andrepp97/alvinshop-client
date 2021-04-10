import React from 'react';
import './loader.css';

const MiniLoader = ({ full }) => {
    return (
        <div
            style={full && {height: '100vh'}}
            className="d-flex justify-content-center align-items-center w-100 py-5"
        >
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
};

export default MiniLoader;