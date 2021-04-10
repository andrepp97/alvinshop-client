import React from 'react'
import {
    MDBModal,
    MDBModalBody,
} from 'mdbreact';

const rekening = [
    {
        bank: 'BCA',
        name: 'Evera Shop',
        number: '3529090123',
    },
    {
        bank: 'Mandiri',
        name: 'Evera Shop',
        number: '112121212',
    },
]

const CheckoutDialog = (props) => {
    // PROPS
    const { isOpen, toggleCheckout } = props

    // RENDER
    return (
        <MDBModal isOpen={isOpen} toggle={toggleCheckout} centered>

            <div style={{ height: '25px' }}>
                <span id="close-btn" onClick={toggleCheckout}>
                    <i className="fa fa-times" />
                </span>
            </div>

            <MDBModalBody className="pt-0 px-4 my-3">
                <h4 className="h4-responsive">
                    Checkout
                </h4>

                <hr/>

                <select className="custom-select">
                    {rekening.map((item, idx) => (
                        <option key={idx} value={item}>
                            {item.bank}
                        </option>
                    ))}
                </select>
            </MDBModalBody>

        </MDBModal>
    )
}

export default CheckoutDialog
