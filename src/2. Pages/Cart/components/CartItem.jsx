import React from 'react';
import NumberFormat from 'react-number-format';
import {
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBAnimation
} from 'mdbreact';

const CartItem = ({ index, item, editQty, duration }) => {
    return (
        <MDBAnimation
            reveal
            type="fadeInUp"
            className="card mb-4 p-2"
            style={{ background: '#f4f4f4' }}
        >

            <div className="text-right d-block d-sm-none mb-n3" style={{zIndex: 999}}>
                <MDBDropdown>
                    <MDBDropdownToggle color="transparent" className="m-0 px-2 py-1">
                        <MDBIcon icon="ellipsis-v" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>Move to Favourites</MDBDropdownItem>
                        <MDBDropdownItem>Remove</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </div>

            <div className="row">
                <div className="col-4 col-md-3 col-xl-2">
                    <img src={item.image} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-8 col-md-9 col-xl-10 d-flex flex-column">
                    <NumberFormat
                        prefix={'Rp '}
                        value={item.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={value => <span className="font-weight-bolder opacity-70">{value}</span>}
                    />
                    <div className="d-flex flex-md-row align-items-md-center flex-column mt-2">
                        <div>{item.name}</div>
                        <i className="fa fa-circle font-small opacity-80 d-none d-md-block mx-3" />
                        <div className="d-flex align-items-center mt-3 mt-md-0">
                            <span>Qty</span>
                            <input
                                min={0}
                                type="number"
                                className="form-control w-responsive ml-2"
                                onChange={e => editQty(e.target.value, index)}
                                value={item.qty}
                            />
                        </div>
                    </div>
                    <div className="d-none d-sm-block" style={{ position: 'absolute', bottom: 0, right: 12 }}>
                        <button className="btn px-2 py-1 ml-0 mr-2">
                            <MDBIcon far icon="heart" className="mr-2" />
                            Move to Favourites
                        </button>
                        <button className="btn btn-red px-2 py-1 ml-0" onClick={() => console.log(item)}>
                            <MDBIcon icon="trash" />
                        </button>
                    </div>
                </div>
            </div>
        </MDBAnimation>
    );
};

export default CartItem;