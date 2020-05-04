import React from 'react';
import { MDBModal, MDBModalBody, MDBInput } from 'mdbreact';

const SearchModal = ({ isOpen, toggleSearch }) => {
    return (
        <MDBModal isOpen={isOpen} toggle={toggleSearch} centered>

            <div style={{ height: '25px' }}>
                <span id="close-btn" onClick={toggleSearch}>
                    <i className="fa fa-times" />
                </span>
            </div>

            <MDBModalBody className="pt-0 px-4 my-3">

                <h4 className="h4-responsive text-center">SEARCH</h4>
                <MDBInput outline label="Search the store" icon="search" />

                <div className="list-group">
                    <div className="list-group-item" style={{ cursor:'pointer' }}>
                        <i className="fa fa-gamepad mr-3" />
                        Hasil Search 1
                    </div>
                    <div className="list-group-item" style={{ cursor:'pointer' }}>
                        <i className="fa fa-gamepad mr-3" />
                        Hasil Search 2
                    </div>
                    <div className="list-group-item" style={{ cursor:'pointer' }}>
                        <i className="fa fa-gamepad mr-3" />
                        Hasil Search 3
                    </div>
                </div>

            </MDBModalBody>

        </MDBModal>
    );
};

export default SearchModal;