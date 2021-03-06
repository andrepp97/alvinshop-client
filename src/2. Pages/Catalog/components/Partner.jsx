import React, {useState, useEffect, useCallback} from 'react';
import { MDBAnimation } from 'mdbreact';
import Carousel from 'react-multi-carousel';

import Loader from '../../../1. Components/Loader';
import APIRequest from '../../../4. Api/APIRequest';
import { BASE_URL } from '../../../5. Helper/settings';

const responsive = {
    lg: {
        breakpoint: { max: 1600, min: 660 },
        items: 3
    },
    md: {
        breakpoint: { max: 660, min: 550 },
        items: 2.5
    },
    sm: {
        breakpoint: { max: 550, min: 0 },
        items: 2
    },
    xs: {
        breakpoint: { max: 460, min: 0 },
        items: 1
    },
}

const PartnerCarousel = () => {
    // STATE
    const prefix = "uploads/our_partner"
    const [partners, setPartners] = useState(null)
    const [loading, setLoading] = useState(true)

    // GET DATA
    const getPartners = useCallback(() => {
        APIRequest.get('user/ourPartner')
        .then(({data}) => {
            // console.log('Hasil', data)
            setPartners(data.data)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    // LIFECYCLE
    useEffect(() => {
        getPartners()
    }, [getPartners])

    // RENDER
    return loading
    ? <Loader />
    : (
        <MDBAnimation reveal type="fadeInUp">
            <Carousel
                showDots={true}
                draggable={true}
                responsive={responsive}
                containerClass="mb-5 pb-4 pt-2"
            >
                {partners ? partners.map(item => (
                    <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="img-partner p-2"
                    >
                        <img
                            className="img-fluid"
                            alt={item.partner_name}
                            src={BASE_URL + prefix + '/' + item.logo}
                        />
                    </a>
                )) : null}
            </Carousel>
        </MDBAnimation>
    );
};

export default PartnerCarousel;