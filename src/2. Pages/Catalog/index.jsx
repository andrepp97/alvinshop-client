import React, { Component } from 'react';
import {
    MDBAnimation,
    MDBTreeview,
    MDBTreeviewList,
    MDBTreeviewItem,
} from 'mdbreact';

// COMPONENTS
import Carousel from './components/Carousel';

class Catalog extends Component {
    state = {
        products1: [
            {
                id: 1,
                name: 'Minecraft Dungeons',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg'
            },
            {
                id: 2,
                name: 'Animal Crossing: New Horizons',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co283p.jpg'
            },
            {
                id: 3,
                name: 'Tekken 7',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.jpg'
            },
            {
                id: 4,
                name: 'Final Fantasy VII',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmw.jpg'
            },
            {
                id: 5,
                name: 'Red Dead Redemption 2',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg'
            }
        ],
        products2: [
            {
                id: 1,
                name: 'God Of War',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg'
            },
            {
                id: 2,
                name: 'The Last Of Us',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg'
            },
            {
                id: 3,
                name: 'Metal Gear Solid 3: Snake Eater',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1ox4.jpg'
            },
            {
                id: 4,
                name: 'NieR: Automata',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/qhok1pi6egmfizjjii7r.jpg'
            },
            {
                id: 5,
                name: 'The Witcher 3: Wild Hunt',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
            }
        ],
        selectedData: ''
    }

    // LIFECYCLE
    componentDidMount() {
        let q = window.location.search.split('=')[1]
        this.setState({ selectedData: q })
    }
    
    // MAIN RENDER
    render() {
        const {
            products1,
            products2,
            selectedData
        } = this.state

        return (
            <MDBAnimation type="fadeIn" id="page-wrapper" className="px-5">
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
                            <Carousel data={products1} />

                            {/* SECONDARY CAROUSEL */}
                            <span className="text-uppercase font-weight-bolder spacing-2">
                                Today's Offer
                            </span>
                            <Carousel data={products2} />

                        </div>

                    </div>

                </div>
            </MDBAnimation>
        );
    }
}

export default Catalog;