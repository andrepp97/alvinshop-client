import React from 'react';
import './loader.css';

const MiniLoader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100 py-4">
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