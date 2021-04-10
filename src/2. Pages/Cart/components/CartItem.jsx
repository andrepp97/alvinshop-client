import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { MDBAnimation, MDBBtnGroup, MDBBtn, MDBIcon } from 'mdbreact';
import { BASE_URL } from '../../../5. Helper/settings';

const CartItem = ({ data, updateCart, deleteCart }) => {
    // STATE
    const [jumlah, setJumlah] = useState(data.quantity)

    // UPDATE QTY
    const incrementQty = () => {
        const temp = jumlah + 1
        if (temp <= data.product_stock) setJumlah(temp)
    }
    const decrementQty = () => {
        const temp = jumlah - 1
        if (temp > 0) setJumlah(temp)
    }

    // LIFECYCLE
    useEffect(() => {
        if (jumlah !== data.quantity) {
            const debounceFunction = setTimeout(() => {
                const body = {
                    jumlah,
                    id: data.product_id,
                }
                updateCart(body)
            }, 1000)
            
            return () => clearTimeout(debounceFunction)
        }
    }, [data, jumlah, updateCart])

    // RENDER
    return (
        <MDBAnimation
            reveal
            type="fadeInUp"
            className="mb-4"
        >

            <div className="card">
                <div className="card-body">

                    <div className="row">

                        <div className="col-sm-5">
                            <img
                                src={BASE_URL + data.product_image}
                                alt={data.product_title}
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="col-sm-7">

                            <Link
                                to={`/product/${data.product_id}`}
                                className="product-title"
                            >
                                {data.product_title}
                            </Link>
                            {(data.product_discount || data.product_discount !== 0) && (
                                <div>
                                    <small className="badge badge-danger">
                                        {data.product_discount}%
                                    </small>
                                    <NumberFormat
                                        prefix={'Rp '}
                                        displayType={'text'}
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        value={data.product_price}
                                        className="strike-text ml-1"
                                    />
                                </div>
                            )}
                            <p className="product-price">
                                <NumberFormat
                                    prefix={'Rp '}
                                    displayType={'text'}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    value={(data.product_price) - (data.product_price * data.product_discount / 100)}
                                />
                            </p>

                            <div className="row">
                                <div className="col">
                                    <MDBBtnGroup>
                                        <MDBBtn
                                            color="indigo"
                                            onClick={decrementQty}
                                            className="text-center px-3 py-1 m-0"
                                        >
                                            <MDBIcon icon="minus" />
                                        </MDBBtn>
                                        <input
                                            disabled
                                            type="text"
                                            value={jumlah}
                                            className="form-control w-responsive text-center"
                                        />
                                        <MDBBtn
                                            color="indigo"
                                            onClick={incrementQty}
                                            className="text-center px-3 py-1 m-0"
                                        >
                                            <MDBIcon icon="plus" />
                                        </MDBBtn>
                                    </MDBBtnGroup>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <MDBBtn
                                        color="red"
                                        className="px-3 py-2 m-0"
                                        onClick={() => deleteCart({
                                            id: data.product_id,
                                            name: data.product_title,
                                        })}
                                    >
                                        <MDBIcon icon="trash" />
                                    </MDBBtn>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </MDBAnimation>
    );
};

export default CartItem;