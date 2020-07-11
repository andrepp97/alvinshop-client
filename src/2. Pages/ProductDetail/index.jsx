import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';

class DetailProduk extends Component {
    state = {
        data: []
    }

    // LIFECYCLE
    componentDidMount() {
        const productId = this.props.match.params.id
        console.log(productId)
    }

    // MAIN RENDER
    render() {
        return (
            <MDBAnimation type="fadeIn" id="page-wrapper">
                
            </MDBAnimation>
        );
    }
}

export default DetailProduk;