import React from 'react';
import { Link } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
import Carousel from 'react-multi-carousel';
import {BASE_URL} from '../../../5. Helper/settings';

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
        breakpoint: { max: 1366, min: 1080 },
        items: 3
    },
    md2: {
        breakpoint: { max: 1080, min: 991 },
        items: 2.5
    },
    sm: {
        breakpoint: { max: 991, min: 720 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 720, min: 500 },
        items: 2
    },
    mobile2: {
        breakpoint: { max: 500, min: 400 },
        items: 1.5
    },
    mobile3: {
        breakpoint: { max: 400, min: 0 },
        items: 1
    }
}

const MainCarousel = ({data}) => {
    return (
        <MDBAnimation reveal type="fadeInUp">
            <Carousel
                showDots={true}
                draggable={true}
                responsive={responsive}
                containerClass="mb-5 pb-4 pt-2"
            >
                {data.map((item,idx) => (
                    <Link
                        key={idx}
                        className="invisible-card"
                        to={`/product/${item.product_id}`}
                    >
                        <img
                            alt={item.name}
                            className="img-fluid rounded"
                            src={BASE_URL + item.product_image}
                        />
                        <span className="product-title">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </Carousel>
        </MDBAnimation>
    );
};

export default MainCarousel;