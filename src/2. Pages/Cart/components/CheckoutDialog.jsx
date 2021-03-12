import React from 'react'
import {
    MDBModal,
    MDBModalBody,
} from 'mdbreact';

const CheckoutDialog = (props) => {
    // PROPS
    const {isOpen, toggleCheckout} = props

    // RENDER
    return (
        <MDBModal isOpen={isOpen} toggle={toggleCheckout} centered>

            <div style={{ height: '25px' }}>
                <span id="close-btn" onClick={toggleCheckout}>
                    <i className="fa fa-times" />
                </span>
            </div>

            <MDBModalBody className="pt-0 px-4 my-3">
                Ini Checkout
            </MDBModalBody>
            
        </MDBModal>
    )
}

export default CheckoutDialog
