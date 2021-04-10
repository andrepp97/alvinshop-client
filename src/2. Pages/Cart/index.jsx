import React, { useState, useEffect, useContext } from 'react';
import NumberFormat from 'react-number-format';
import { MDBAnimation, MDBBtn } from 'mdbreact';

import CartItem from './components/CartItem';
import CheckoutDialog from './components/CheckoutDialog';
import Loader from '../../1. Components/Loader';
import { CartContext } from '../../7. Context/CartContext';

const UserCart = () => {
    // CONTEXT
    const {
        userCart,
        updateCart,
        deleteCart,
        calculating,
    } = useContext(CartContext)

    // STATE
    const [isCheckout, setIsCheckout] = useState(false)

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // CALCULATE TOTAL
    const calculateTotal = () => {
        let res = 0

        userCart && userCart.forEach(item => {
            res += (item.product_price - (item.product_price * item.product_discount / 100)) * item.quantity
        })

        return res
    }

    // RENDER
    return !userCart
        ? <Loader full={true} />
        : (
            <MDBAnimation type="fadeIn">
                <div className="container py-5">

                    <div className="text-center border-bottom py-3 my-5">
                        <h4 className="h4-responsive text-uppercase">
                            Shopping Cart
                        </h4>
                    </div>

                    <div className="row">

                        <div className="col-md-8 mb-4">
                            <div className="card-body">
                                <h5 className="h5-responsive text-uppercase">
                                    <strong>{userCart && userCart.length}</strong> items
                            </h5>
                                <hr />
                                {
                                    userCart
                                        ? userCart.length
                                            ? userCart.map((item, idx) => (
                                                <CartItem
                                                    key={idx}
                                                    data={item}
                                                    updateCart={updateCart}
                                                    deleteCart={deleteCart}
                                                />
                                            ))
                                            : <p>Your cart is empty</p>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card-body">
                                <h5 className="h5-responsive text-uppercase">
                                    Total
                                </h5>

                                <hr />

                                {
                                    calculating
                                        ? <Loader />
                                        : (
                                            <>
                                                <NumberFormat
                                                    prefix={'Rp '}
                                                    displayType={'text'}
                                                    decimalSeparator=","
                                                    thousandSeparator="."
                                                    value={calculateTotal()}
                                                    renderText={value => <h4 className="h4-responsive font-weight-bold opacity-70">{value}</h4>}
                                                />
                                                <MDBBtn
                                                    color="indigo"
                                                    className="w-100 m-0 mt-5"
                                                    hidden={!userCart || !userCart.length}
                                                    onClick={() => setIsCheckout(true)}
                                                >
                                                    Checkout
                                                </MDBBtn>
                                            </>
                                        )
                                }
                            </div>
                        </div>

                        {/* DIALOGS */}
                        <CheckoutDialog
                            isOpen={isCheckout}
                            toggleCheckout={() => setIsCheckout(false)}
                        />

                    </div>

                </div>
            </MDBAnimation>
        );
};

export default UserCart;