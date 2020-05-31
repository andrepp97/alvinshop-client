import React, { Component } from 'react';
import { MDBTreeview, MDBTreeviewList, MDBTreeviewItem } from 'mdbreact';

// COMPONENTS
import MainCarousel from './components/MainCarousel';
import SecondaryCarousel from './components/SecondaryCarousel';

class Catalog extends Component {
    state = {
        selectedData: ''
    }

    // LIFECYCLE
    componentDidMount() {
        let q = window.location.search.split('=')[1]
        this.setState({ selectedData: q })
    }
    
    // MAIN RENDER
    render() {
        const { selectedData } = this.state

        return (
            <div id="page-wrapper" className="px-5">
                <div className="container-fluid">
                
                    <div className="row">

                        {/* LEFT COLUMN */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <div className="card">
                                <div className="card-body">
                                    <span className="text-uppercase font-weight-bolder spacing-1 opacity-80">
                                        Discover
                                    </span>
                                    <MDBTreeview
                                        theme='animated'
                                        className="opacity-90 mt-2"
                                        getValue={value => console.log(value)}
                                    >
                                        <MDBTreeviewList icon='gamepad' title='Playstation' opened={selectedData === 'playstation'}>
                                            <MDBTreeviewItem icon="none" title='PS 3' />
                                            <MDBTreeviewItem icon="none" title='PS 4' />
                                        </MDBTreeviewList>
                                        <MDBTreeviewList icon="list-alt" title='Genre' opened={selectedData === 'genre'}>
                                            <MDBTreeviewItem icon="none" title='Action' />
                                            <MDBTreeviewItem icon="none" title='Casual' />
                                            <MDBTreeviewItem icon="none" title='RPG' />
                                            <MDBTreeviewItem icon="none" title='Racing' />
                                        </MDBTreeviewList>
                                    </MDBTreeview>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="col-lg-9">

                            {/* MAIN CAROUSEL */}
                            <span className="text-uppercase font-weight-bolder spacing-2">
                                Recommended
                            </span>
                            <MainCarousel />

                            {/* SECONDARY CAROUSEL */}
                            <span className="text-uppercase font-weight-bolder spacing-2">
                                Today's Offer
                            </span>
                            <SecondaryCarousel />

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Catalog;