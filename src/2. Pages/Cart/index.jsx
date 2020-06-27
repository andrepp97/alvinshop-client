import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';
import CartItem from './components/CartItem';

class UserCart extends Component {
    state = {
        data: [
            {
                id: 1,
                name: 'Cyberpunk 2077',
                price: 1099000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg'
            },
            {
                id: 2,
                name: 'Resident Evil 3',
                price: 666666,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co22l7.jpg'
            },
            {
                id: 3,
                name: 'Hunting Simulator 2',
                price: 450000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co20m6.jpg'
            }
        ]
    }

    // FUNCTIONS
    onChangeQty = (val, idx) => {
        let newData = [...this.state.data]
        newData[idx].qty = parseInt(val)
        this.setState({ data: newData })
    }
    // FUNCTIONS

    // MAIN RENDER
    render() {
        const { data } = this.state

        return (
            <MDBAnimation type="fadeIn" id="page-wrapper" className="px-1 px-sm-3 px-md-2 px-lg-5">
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="h4-responsive text-uppercase">
                                        Your Cart
                                    </h4>
                                    <hr/>
                                    {data ? data.map((row,idx) => (
                                        <CartItem
                                            key={idx}    
                                            item={row}
                                            index={idx}
                                            editQty={this.onChangeQty}
                                        />
                                    )) : null}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="h4-responsive text-uppercase">
                                        Total
                                    </h4>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </MDBAnimation>
        );
    }
}

export default UserCart;