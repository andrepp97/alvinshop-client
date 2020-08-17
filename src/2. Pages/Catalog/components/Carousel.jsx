import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

const responsive = {
    xxl: {
        breakpoint: { max: 4000, min: 1920 },
        items: 5
    },
    xl: {
        breakpoint: { max: 1920, min: 1550 },
        items: 4
    },
    lg: {
        breakpoint: { max: 1550, min: 1366 },
        items: 3.5
    },
    md: {
        breakpoint: { max: 1366, min: 1180 },
        items: 3
    },
    md2: {
        breakpoint: { max: 1180, min: 991 },
        items: 2.5
    },
    md3: {
        breakpoint: { max: 991, min: 900 },
        items: 3
    },
    sm: {
        breakpoint: { max: 900, min: 775 },
        items: 2.5
    },
    xs2: {
        breakpoint: { max: 775, min: 640 },
        items: 2.2
    },
    mobile: {
        breakpoint: { max: 640, min: 520 },
        items: 1.75
    },
    mobile2: {
        breakpoint: { max: 520, min: 400 },
        items: 1.3
    },
    mobile3: {
        breakpoint: { max: 400, min: 0 },
        items: 1
    }
}

const MainCarousel = ({data}) => {
    return (
        <Carousel
            showDots={true}
            draggable={true}
            responsive={responsive}
            containerClass="mb-5 pb-4 pt-2"
        >
            {data.map((item,idx) => (
                <Link to={`/product/${item.id}`} key={idx}>
                    <img
                        alt={item.name}
                        src={item.image}
                        className="img-fluid rounded shadow"
                    />
                </Link>
            ))}
        </Carousel>
    );
};

export default MainCarousel;