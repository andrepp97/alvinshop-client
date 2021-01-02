import React from 'react';
import './loading.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="spinner-border" />
            <br/>
            <p className="loading-text">Please Wait</p>
        </div>
    );
};

export default LoadingScreen;