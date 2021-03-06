import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
import './catalog.css';

// COMPONENTS
import MasonryCarousel from './components/MasonryCarousel';
import CarouselFull from './components/CarouselFull';
import Carousel from './components/Carousel';
import Partner from './components/Partner';
import Loader from '../../1. Components/Loader';
import APIRequest from '../../4. Api/APIRequest';

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

const Catalog = () => {
    // PARAM
    const {key} = useParams()

    // STATE
    const [selectedData, setSelectedData] = useState('')
    const [recommended, setRecommended] = useState(null)
    const [offer, setOffer] = useState(null)

    // CRUD
    const getRecommended = async () => {
        try {
            const res = await APIRequest.get('user/recommendProduct')
            console.log('Recommended', res.data.data)
            const {data} = res.data
            setRecommended(data)
        } catch (err) {
            console.log('Error Recommended', err)
        }
    }

    const getOffer = async () => {
        try {
            const res = await APIRequest.get('user/todayOffer')
            console.log('Todays Offer', res.data.data)
            const {data} = res.data
            setOffer(data)
        } catch (err) {
            console.log('Error Today Offer', err)
        }
    }

    // LIFECYCLE
    useEffect(() => {
        setSelectedData(key)
        getRecommended()
        getOffer()
    }, [key])

    // RENDER
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
                        {recommended ? <Carousel data={recommended} /> : <Loader />}

                        {/* SECONDARY CAROUSEL */}
                        <span className="text-uppercase font-weight-bolder spacing-2">
                            Today's Offer
                        </span>
                        {offer ? <Carousel data={offer} /> : <Loader />}

                        {/* PARTNERS CAROUSEL */}
                        <span className="text-uppercase font-weight-bolder spacing-2">
                            Our Partners
                        </span>
                        <Partner />

                    </div>

                </div>

            </div>

        </MDBAnimation>
    );
};

export default Catalog;