import React, { useState, createContext, useContext, useCallback } from 'react'
import Swal from 'sweetalert2';
import APIRequest from '../4. Api/APIRequest';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    // AUTH
    const { toggleAuth } = useContext(AuthContext)

    // STATE
    const [calculating, setCalculating] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [userCart, setUserCart] = useState(null)

    // CRUD
    const getUserCart = useCallback(() => {
        APIRequest.get('user/showCart')
            .then(({ data }) => {
                console.log('Cart Data', data)
                setUserCart(data.data)
            })
            .catch(err => console.log(err.response.data))
    }, [])

    const addToCart = (data) => {
        setIsAdding(true)

        const body = {
            product_id: data.id,
            quantity: data.jumlah,
        }

        APIRequest.post('user/addCart', body)
            .then(({ data }) => {
                // console.log(data)
                getUserCart()
                Swal.fire({
                    icon: 'success',
                    title: 'Added to your cart',
                    showCancelButton: true,
                    cancelButtonText: 'Close',
                    confirmButtonText: 'My Cart',
                })
                    .then(result => {
                        if (result.value) window.location.pathname = '/cart'
                    })
            })
            .catch(err => {
                if (err.response) {
                    switch (err.response.data.message) {
                        case "Token auth required at header:token":
                            toggleAuth()
                            break;
                        case "product is already added":
                            Swal.fire({
                                icon: 'info',
                                title: 'This product is already in your cart',
                                showCancelButton: true,
                                cancelButtonText: 'Close',
                                confirmButtonText: 'My Cart',
                            })
                                .then(result => {
                                    if (result.value) window.location.pathname = '/cart'
                                })
                            break;
                        default:
                            console.log(err.response.data)
                            break;
                    }
                    console.log(err.response)
                } else {
                    console.log(err)
                }
            })
            .finally(() => setIsAdding(false))
    }

    const updateCart = (data) => {
        setCalculating(true)

        const body = {
            product_id: data.id,
            quantity: data.jumlah,
        }

        APIRequest.put('user/updateQuantity', body)
            .then(() => getUserCart())
            .catch(err => console.log(err.response))
            .finally(() => setCalculating(false))
    }

    const deleteCart = (data) => {
        Swal.fire({
            title: `Delete ${data.name} ?`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, keep it',
            confirmButtonColor: 'red',
            confirmButtonText: 'Yes, delete it',
        })
            .then((result) => {
                if (result.value) {
                    APIRequest.post('user/deleteCart', { product_id: data.id })
                        .then(({ data }) => {
                            // console.log(data)
                            getUserCart()
                        })
                        .catch(err => console.log(err.response))
                }
            })
    }

    // VALUES
    const values = {
        userCart,
        isAdding,
        addToCart,
        updateCart,
        deleteCart,
        getUserCart,
        calculating,
    }

    // RENDER
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
