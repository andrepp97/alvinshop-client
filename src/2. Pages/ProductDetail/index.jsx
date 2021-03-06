import React, {useEffect, useState, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {MDBAnimation} from 'mdbreact';
import YouTube from 'react-youtube';
import './style.css';

// OTHERS
import Loader from '../../1. Components/Loader';
import APIRequest from '../../4. Api/APIRequest';
import {BASE_URL} from '../../5. Helper/settings';

const data = {
    id: 3,
    name: "Tekken 7",
    year: 2015,
    publisher: "Bandai Namco Studios",
    poster: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.jpg",
    backdrop: "https://images5.alphacoders.com/843/thumb-1920-843147.jpg",
    videoId: "kKLCwDg2JLA",
    description: "Experience the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, TEKKEN 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics.",
    genre: [
        { id: 4, name: "Fighting" },
        { id: 7, name: "Sport" }
    ]
}

const DetailProduk = () => {
    // PARAMS
    const {id} = useParams();

    // STATE
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState(null)

    // CRUD
    const getProductDetail = useCallback(async () => {
        try {
            const res = await APIRequest.post('user/detailProduct', {id})
            const {data} = res.data
            console.log('Detail produk', data)
            setDetails(data)
        } catch (err) {
            console.log('Product Detail Error', err)
        } finally {
            setLoading(false)
        }
    }, [id])

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0,0)
        getProductDetail()
    }, [getProductDetail])

    // FUNCTIONS
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    // RENDER
    return loading
    ? <Loader />
    : (
        <MDBAnimation type="fadeIn" className="bg-main pb-5">
            {/* <div
                className="product-backdrop"
                style={{ backgroundImage: `url(${data.backdrop})` }}
            >
                <div className="product-overlay" />
            </div> */}

            <div className="container py-5">

                <div className="row my-5">
                    <div className="col-md-4 text-center">
                        <img
                            src={BASE_URL + details.image[0].product_image}
                            alt={data.name}
                            className="img-fluid rounded product-img"
                        />
                        <div>
                            <button className="btn btn-brown">
                                <i className="fa fa-cart-plus mr-2" />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3 className="h3-responsive font-weight-bold opacity-70">
                            {details.title} <small>({data.year})</small>
                        </h3>
                        <h5 className="h5-responsive opacity-80 mt-2">
                            {data.publisher}
                        </h5>
                        <p className="opacity-70 mt-3">
                            {details.description}
                        </p>
                        <div>
                            <strong className="opacity-80">Genre : </strong>
                            {details.genre ? details.genre.map(item => (
                                <div key={item.id} className="badge badge-light mx-1">
                                    {item.genre}
                                </div>
                            )) : null}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <YouTube
                            onReady={onReady}
                            className="w-100 rounded shadow"
                            videoId={details.youtube_link.split('=')[1]}
                        />
                    </div>
                </div>

            </div>
        </MDBAnimation>
    );
};

export default DetailProduk;