import React, { Component } from 'react';
import { MDBAnimation } from 'mdbreact';
import './catalog.css';

// COMPONENTS
import MasonryCarousel from './components/MasonryCarousel';
import CarouselFull from './components/CarouselFull';
import Carousel from './components/Carousel';

const discover = [
    {
        key: "node1",
        icon: "gamepad",
        label: "Playstation",
        nodes: [
            { key: "node1-1", label: "PS4" },
            { key: "node1-2", label: "PS5" },
        ]
    },
    {
        key: "node2",
        icon: "laptop",
        label: "PC",
        nodes: [
            { key: "node2-1", label: "Headset" },
            { key: "node2-2", label: "Keyboard" },
            { key: "node2-3", label: "Mouse" },
        ]
    },
]

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
                id: 7,
                name: 'God Of War',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg'
            },
            {
                id: 8,
                name: 'The Last Of Us',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg'
            },
            {
                id: 9,
                name: 'Metal Gear Solid 3: Snake Eater',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1ox4.jpg'
            },
            {
                id: 10,
                name: 'NieR: Automata',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/qhok1pi6egmfizjjii7r.jpg'
            },
            {
                id: 11,
                name: 'The Witcher 3: Wild Hunt',
                image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
            }
        ],
        selectedData: '',
    }

    // LIFECYCLE
    componentDidMount() {
        const { data } = this.props.location.state || ""
        this.setState({ selectedData: data })
        console.log(data)
    }
    
    
    // MAIN RENDER
    render() {
        const {
            products1,
            products2,
            selectedData,
        } = this.state

        return (
            <MDBAnimation type="fadeIn">

                <CarouselFull/>

                <div className="container-fluid pb-5 mt-5 px-4 px-md-5">

                    <MasonryCarousel />

                    <div className="row mt-5">

                        {/* LEFT COLUMN */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <div className="sticky-top pt-4 pt-lg-5 mt-n3">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="font-weight-bold spacing-1 opacity-80">
                                            DISCOVER
                                        </p>
                                        <div className="list-group">
                                            {discover.map(item => (
                                                <div
                                                    key={item.key}
                                                    className="list-group-item"
                                                >
                                                    <span className="font-weight-bold">
                                                        {item.label}
                                                    </span>
                                                    <div>
                                                        {item.nodes.map(node => (
                                                            <div
                                                                key={node.key}
                                                                onClick={() => this.setState({ selectedData: node.label })}
                                                                className={`node-item pl-3 py-1 ${selectedData === node.label ? "node-item-active" : ""}`}
                                                            >
                                                                {node.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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