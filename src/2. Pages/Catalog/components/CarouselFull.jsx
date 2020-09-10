import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Cover from '../../../3. Assets/img/cover.gif';

const responsive = {
    md: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
}

const data = [
    {
        id: 1,
        name: 'The Witcher 3',
        image: Cover
    },
    {
        id: 2,
        name: 'Final Fantasy VII Remake',
        image: 'https://www.dailyrush.dk/uploads/2020/06/ghost-of-tsushima.jpg'
    },
    {
        id: 3,
        name: 'Cyberpunk 2077',
        image: 'https://images.pushsquare.com/c1143ad56a9e2/cyberpunk-2077-reversible-cover.original.jpg'
    },
]

const MainCarousel = () => {
    return (
        <Carousel
            infinite
            autoPlay
            autoPlaySpeed={4000}
            showDots={true}
            draggable={true}
            responsive={responsive}
            containerClass="carousel-container"
        >
            {data.map((item,idx) => (
                <Link to={`/product/${item.id}`} key={idx}>
                    <img
                        alt={item.name}
                        src={item.image}
                        className="carousel-img"
                    />
                </Link>
            ))}
        </Carousel>
    );
};

export default MainCarousel;