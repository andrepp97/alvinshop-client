import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

const responsive = {
    md: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
}

const data = [
    {
        id: 1,
        name: 'Final Fantasy VII Remake',
        image: 'https://www.dailyrush.dk/uploads/2020/06/ghost-of-tsushima.jpg'
    },
    {
        id: 2,
        name: 'Final Fantasy VII Remake',
        image: 'https://www.dailyrush.dk/uploads/2020/06/ghost-of-tsushima.jpg'
    },
    {
        id: 3,
        name: 'Final Fantasy VII Remake',
        image: 'https://www.dailyrush.dk/uploads/2020/06/ghost-of-tsushima.jpg'
    },
]

const MainCarousel = () => {
    return (
        <Carousel
            showDots={true}
            draggable={true}
            responsive={responsive}
        >
            {data.map((item,idx) => (
                <Link to={`/product/${item.id}`} key={idx}>
                    <img
                        alt={item.name}
                        src={item.image}
                        className="w-100 opacity-90"
                    />
                </Link>
            ))}
        </Carousel>
    );
};

export default MainCarousel;