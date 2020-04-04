import React, { useEffect } from 'react';
import { MDBAnimation, MDBBtn, MDBIcon } from 'mdbreact';

const PageNotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="page-wrapper" className="d-flex align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 offset-md-3 text-center">
                <MDBAnimation type="flash" duration="3s" infinite>
                    <h1>4 0 4</h1>
                </MDBAnimation>
                <h3 className='h3-responsive border-top border-bottom mx-sm-5 my-5 p-4'>
                    PAGE NOT FOUND
                </h3>
                <MDBBtn outline color="brown" className="py-2 px-4 rounded-pill" onClick={() => window.history.back()}>
                    <MDBIcon icon="arrow-left" />
                    <span className="ml-2">Back To Website</span>
                </MDBBtn>
            </div>
        </div>
    );
};

export default PageNotFound;