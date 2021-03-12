import React, { useState, createContext, useContext, useCallback } from 'react'
import Swal from 'sweetalert2';
import APIRequest from '../4. Api/APIRequest';
import {AuthContext} from './AuthContext';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    // AUTH
    const { toggleAuth } = useContext(AuthContext)

    // STATE
    const [userCart, setUserCart] = useState(null)

    // CRUD
    const getUserCart = useCallback(() => {
        APIRequest.get('user/showCart')
        .then(({data}) => {
            // console.log('Cart', data)
            setUserCart(data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [])

    const addToCart = (data) => {
        const body = {
            product_id: data.id,
            quantity: data.jumlah,
        }

        APIRequest.post('user/addCart', body)
        .then(({data}) => {
            console.log(data)
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
                if (err.response.status === 400) toggleAuth()
                if (err.response.data.message === 'product is already added') {
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
                }
                console.log(err.response)
            } else {
                console.log(err)
            }
        })
    }

    const updateCart = (data) => {
        const body = {
            product_id: data.id,
            quantity: data.jumlah,
        }

        APIRequest.put('user/updateQuantity', body)
        .then(({data}) => {
            console.log(data)
            getUserCart()
        })
        .catch(err => {
            console.log(err.response)
        })
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
                .then(({data}) => {
                    console.log(data)
                    getUserCart()
                })
                .catch(err => console.log(err.response))
            }
        })
    }

    // VALUES
    const values = {
        userCart,
        addToCart,
        updateCart,
        deleteCart,
        getUserCart,
    }

    // RENDER
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
