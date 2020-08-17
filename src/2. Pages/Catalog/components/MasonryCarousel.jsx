import React from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
    md: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    },
}

const data = {
    carousel1: [
        {
            id: 1,
            name: "FIFA 2020",
            image: "https://gmsrp.cachefly.net/images/19/08/01/2c3a23e39e62d208d930c66c05a631ee/960.jpg"
        },
        {
            id: 2,
            name: "PES 2020",
            image: "https://www.fcbarcelona.com/photo-resources/2019/06/11/fb5a8a28-26f0-456a-a8cf-384d71d5bb11/portada-messi.JPG?width=1200&height=750"
        },
    ],
    carousel2: [
        {
            id: 3,
            name: "Tekken 7",
            image: "https://www.oneesports.gg/id/wp-content/uploads/sites/2/2019/11/Tekken-7_Cover-450x253.jpg"
        },
        {
            id: 4,
            name: "Street Fighter V",
            image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ab681034-96d8-11e6-9d6f-00163ec9f5fa/540128164/street-fighter-v-screenshot.jpg"
        },
    ],
    carousel3: [
        {
            id: 5,
            name: "Persona 5",
            image: "https://assets.rpgsite.net/articles/cover_images/000/005/460/entity_feature/p5_big.png"
        },
        {
            id: 6,
            name: "Sekiro",
            image: "https://www.blogdot.tv/wp-content/uploads/2019/08/weekend-deal-sekiro-shadows-die-twice-20-off.jpg"
        },
    ],
}

const MasonryCarousel = () => {
    return (
        <div className="row">
            <div className="col-md-6 p-2">
                <Carousel
                    showDots={true}
                    draggable={true}
                    responsive={responsive}
                    containerClass="carousel-masonry-left"
                >
                    {data.carousel1.map(item => (
                        <img
                            key={item.id}
                            alt={item.name}
                            src={item.image}
                            className="carousel-masonry-img-left"
                        />
                    ))}
                </Carousel>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col p-2">
                        <Carousel
                            showDots={true}
                            draggable={true}
                            responsive={responsive}
                            containerClass="carousel-masonry-right"
                        >
                            {data.carousel2.map(item => (
                                <img
                                    key={item.id}
                                    alt={item.name}
                                    src={item.image}
                                    className="carousel-masonry-img-right"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <Carousel
                            showDots={true}
                            draggable={true}
                            responsive={responsive}
                            containerClass="carousel-masonry-right"
                        >
                            {data.carousel3.map(item => (
                                <img
                                    key={item.id}
                                    alt={item.name}
                                    src={item.image}
                                    className="carousel-masonry-img-right"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasonryCarousel;