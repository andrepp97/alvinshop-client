import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Loader from '../../../1. Components/Loader';
import APIRequest from '../../../4. Api/APIRequest';
import { BASE_URL } from '../../../5. Helper/settings';

const responsive = {
    md: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
}

const MainCarousel = () => {
    // STATE
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    // GET BANNER
    const getBannerData = () => {
        APIRequest.get('user/banner')
        .then(({data}) => setData(data.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    // LIFECYCLE
    useEffect(() => {
        getBannerData()
    }, [])
    
    // RENDER
    return loading
    ? <Loader />
    : (
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
                <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        alt={item.banner_name}
                        className="carousel-img"
                        src={BASE_URL + item.banner_image}
                    />
                </a>
            ))}
        </Carousel>
    );
};

export default MainCarousel;