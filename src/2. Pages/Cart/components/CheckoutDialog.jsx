import React, { useState } from 'react'
import Swal from 'sweetalert2';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
} from 'mdbreact';
import APIRequest from '../../../4. Api/APIRequest';

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

    // STATE
    const [selectedBank, setSelectedBank] = useState('')
    const [transferDate, setTransferDate] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    // CHECKOUT
    const userCheckout = () => {
        try {
            setLoading(true)

            let formData = new FormData
            formData.append('image', image)
            formData.append('bank', selectedBank.bank)
            formData.append('nama_rekening', selectedBank.name)
            formData.append('tgl_transfer', transferDate)

            APIRequest.post('user/order', formData)
                .then(() => {
                    toggleCheckout()
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Checkout',
                        didClose: () => window.location.reload(),
                    })
                })
                .catch(err => console.log('Error Checkout', err.response))
                .finally(() => setLoading(false))
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

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

                <hr />

                <div className="my-3">
                    <span>Bank Account</span>
                    <select
                        defaultValue="0"
                        className="custom-select"
                        onChange={e => setSelectedBank(JSON.parse(e.target.value))}
                    >
                        <option
                            disabled
                            value="0"
                        >
                            -- Select Bank Account --
                        </option>
                        {rekening.map((item, idx) => (
                            <option key={idx} value={JSON.stringify(item)}>
                                {item.bank}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-3">
                    <span>Transfer Date</span>
                    <input
                        type="date"
                        className="form-control"
                        onChange={e => setTransferDate(e.target.value)}
                        value={transferDate}
                    />
                </div>

                <div className="my-3">
                    <span>Upload</span>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={e => setImage(e.target.files[0])}
                    />
                </div>

                <div className="text-right">
                    <MDBBtn
                        color="indigo"
                        className="m-0"
                        onClick={userCheckout}
                        disabled={loading || !image || !selectedBank || !transferDate}
                    >
                        {
                            loading
                                ? 'Processing . . .'
                                : 'Checkout'
                        }
                    </MDBBtn>
                </div>
            </MDBModalBody>

        </MDBModal>
    )
}

export default CheckoutDialog
