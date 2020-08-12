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
        breakpoint: { max: 1550, min: 1368 },
        items: 3.5
    },
    md: {
        breakpoint: { max: 1368, min: 1200 },
        items: 3
    },
    sm: {
      breakpoint: { max: 1200, min: 991 },
      items: 2.5
    },
    sm2: {
        breakpoint: { max: 991, min: 920 },
        items: 3
    },
    xs: {
        breakpoint: { max: 920, min: 788 },
        items: 2.5
    },
    xs2: {
        breakpoint: { max: 788, min: 655 },
        items: 2.1
    },
    mobile: {
        breakpoint: { max: 650, min: 525 },
        items: 1.6
    },
    mobile2: {
        breakpoint: { max: 525, min: 430 },
        items: 1.25
    },
    mobile3: {
        breakpoint: { max: 430, min: 0 },
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