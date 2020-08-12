import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';
import NumberFormat from 'react-number-format';

// COMPONENTS
import CartItem from './components/CartItem';

class UserCart extends Component {
    state = {
        data: [
            {
                id: 1,
                name: 'Cyberpunk 2077',
                price: 750000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg'
            },
            {
                id: 2,
                name: 'Resident Evil 3',
                price: 399000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co22l7.jpg'
            },
            {
                id: 3,
                name: 'Hunting Simulator 2',
                price: 175000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co20m6.jpg'
            },
            {
                id: 4,
                name: 'Persona 5',
                price: 350000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r76.jpg'
            },
            {
                id: 5,
                name: 'Red Dead Redemption 2',
                price: 400000,
                qty: 1,
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg'
            },
        ]
    }

    // FUNCTIONS
    onChangeQty = (val, idx) => {
        if (val < 1) val = 1
        let newData = [...this.state.data]
        newData[idx].qty = parseInt(val)
        this.setState({ data: newData })
    }

    calculateTotal = () => {
        const { data } = this.state
        let res = 0

        data.forEach(item => {
            res += (item.price * item.qty)
        })

        return res
    }
    // FUNCTIONS

    // MAIN RENDER
    render() {
        const { data } = this.state

        return (
            <MDBAnimation
                type="fadeIn"
                className="py-5 px-0 px-sm-3 px-md-2 px-lg-5"
            >
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-md-8 mb-4">
                            <div className="card-body">
                                <h4 className="h4-responsive text-uppercase">
                                    Your Items
                                </h4>
                                <hr/>
                                {data ? data.map((row,idx) => (
                                    <CartItem
                                        key={idx}    
                                        item={row}
                                        index={idx}
                                        duration={idx*400}
                                        editQty={this.onChangeQty}
                                    />
                                )) : null}
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card-body">
                                <h4 className="h4-responsive text-uppercase">
                                    Total
                                </h4>
                                <hr/>
                                <NumberFormat
                                    prefix={'Rp '}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    value={this.calculateTotal()}
                                    renderText={value => <h5 className="h5-responsive font-weight-bold opacity-70">{value}</h5>}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </MDBAnimation>
        );
    }
}

export default UserCart;