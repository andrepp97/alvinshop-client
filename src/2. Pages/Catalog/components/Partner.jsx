import React from 'react';
import { MDBAnimation } from 'mdbreact';
import Carousel from 'react-multi-carousel';

import Thunder from '../../../3. Assets/img/partner/thunderx3-logo.png';

const responsive = {
    xxl: {
        breakpoint: { max: 4000, min: 1920 },
        items: 6
    },
    xl: {
        breakpoint: { max: 1920, min: 1600 },
        items: 5
    },
    lg: {
        breakpoint: { max: 1600, min: 1320 },
        items: 4
    },
    md: {
        breakpoint: { max: 1320, min: 1025 },
        items: 3
    },
    sm: {
        breakpoint: { max: 1025, min: 991 },
        items: 2.5
    },
    sm2: {
        breakpoint: { max: 991, min: 850 },
        items: 3.25
    },
    xs: {
        breakpoint: { max: 850, min: 630 },
        items: 2.5
    },
    mobile: {
        breakpoint: { max: 630, min: 520 },
        items: 2
    },
    mobile2: {
        breakpoint: { max: 520, min: 400 },
        items: 1.4
    },
    mobile3: {
        breakpoint: { max: 400, min: 0 },
        items: 1
    }
}

const data = [
    {
        id: 1,
        name: "Thunder X3",
        image: Thunder
    },
    {
        id: 2,
        name: "Razer",
        image: Thunder
    },
    {
        id: 3,
        name: "Samsung",
        image: Thunder
    },
    {
        id: 4,
        name: "Logitech",
        image: Thunder
    },
    {
        id: 5,
        name: "Microsoft",
        image: Thunder
    },
    {
        id: 6,
        name: "Microsoft",
        image: Thunder
    },
]

const PartnerCarousel = () => {
    return (
        <MDBAnimation reveal type="fadeInUp">
            <Carousel
                showDots={true}
                draggable={true}
                responsive={responsive}
                containerClass="mb-5 pb-4 pt-2"
            >
                {data.map(item => (
                    <img
                        height={60}
                        key={item.id}
                        alt={item.name}
                        src={item.image}
                        className="border rounded img-partner"
                    />
                ))}
            </Carousel>
        </MDBAnimation>
    );
};

export default PartnerCarousel;