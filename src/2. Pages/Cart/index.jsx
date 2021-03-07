import React, { useEffect, useContext } from 'react';
import NumberFormat from 'react-number-format';
import { MDBAnimation } from 'mdbreact';

import CartItem from './components/CartItem';
import Loader from '../../1. Components/Loader';
import { CartContext } from '../../7. Context/CartContext';

const UserCart = () => {
    // CONTEXT
    const {userCart, updateCart, deleteCart} = useContext(CartContext)

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0,0)
        console.log(userCart)
    }, [userCart])

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
    ? (
        <div className="vh-50 d-flex align-items-center">
            <Loader />
        </div>
    )
    : (
        <MDBAnimation type="fadeIn">
            <div className="vh-100 container py-5">

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
                            <hr/>
                            {
                                userCart
                                ? userCart.length
                                    ? userCart.map((item,idx) => (
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
                            <hr/>
                            <NumberFormat
                                prefix={'Rp '}
                                displayType={'text'}
                                thousandSeparator={true}
                                value={calculateTotal()}
                                renderText={value => <h5 className="h5-responsive font-weight-bold opacity-70">{value}</h5>}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </MDBAnimation>
    );
};

export default UserCart;