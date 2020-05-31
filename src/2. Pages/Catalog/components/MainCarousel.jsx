import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

const responsive = {
    xl: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    lg: {
        breakpoint: { max: 3000, min: 1550 },
        items: 4
    },
    md: {
        breakpoint: { max: 1550, min: 1200 },
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
        items: 2
    },
    mobile: {
        breakpoint: { max: 655, min: 525 },
        items: 1.5
    },
    mobile2: {
        breakpoint: { max: 525, min: 0 },
        items: 1
    }
}

const images = [
    {
        name: 'Minecraft Dungeons',
        image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg'
    },
    {
        name: 'Animal Crossing: New Horizons',
        image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co283p.jpg'
    },
    {
        name: 'Tekken 7',
        image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.jpg'
    },
    {
        name: 'Final Fantasy VII',
        image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmw.jpg'
    },
    {
        name: 'Red Dead Redemption 2',
        image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg'
    }
]

const MainCarousel = () => {
    return (
        <Carousel
            showDots={true}
            draggable={true}
            responsive={responsive}
            containerClass="mb-5 pb-4 pt-2"
        >
            {images.map((item,idx) => (
                <Link to='/product' key={idx}>
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