import React, { useEffect, useState, useContext, useCallback } from 'react';
import { MDBAnimation, MDBInputGroup } from 'mdbreact';
import { useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import YouTube from 'react-youtube';
import './style.css';

// OTHERS
import Loader from '../../1. Components/Loader';
import APIRequest from '../../4. Api/APIRequest';
import { BASE_URL } from '../../5. Helper/settings';
import { CartContext } from '../../7. Context/CartContext';

const DetailProduk = () => {
    // PARAMS
    const { id } = useParams();

    // CONTEXT
    const { addToCart, isAdding } = useContext(CartContext)

    // STATE
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState(null)
    const [jumlah, setJumlah] = useState(1)

    // CRUD
    const getProductDetail = useCallback(async () => {
        try {
            const res = await APIRequest.post('user/detailProduct', { id })
            const { data } = res.data
            setDetails(data)
        } catch (err) {
            console.log('Product Detail Error', err)
        } finally {
            setLoading(false)
        }
    }, [id])

    // LIFECYCLE
    useEffect(() => {
        window.scrollTo(0, 0)
        getProductDetail()
    }, [getProductDetail])

    // FUNCTIONS
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const handleJumlah = (value) => {
        if (value > 0 && value <= details.stock) setJumlah(value)
    }

    const handleAddToCart = () => {
        addToCart({
            id: details.id,
            jumlah
        })
    }

    // RENDER
    return loading
        ? <Loader full={true} />
        : (
            <MDBAnimation type="fadeIn" className="bg-main pb-5">
                <div className="container py-5">

                    <div className="row my-5">
                        <div className="col-md-4">
                            <img
                                alt={details.title}
                                className="img-fluid rounded product-img"
                                src={BASE_URL + details.image[0].product_image}
                            />
                            {(details.discount || details.discount !== 0) && (
                                <div>
                                    <small className="badge badge-danger">
                                        {details.discount}%
                                </small>
                                    <NumberFormat
                                        prefix={'Rp '}
                                        displayType={'text'}
                                        decimalSeparator=","
                                        thousandSeparator="."
                                        value={details.price}
                                        className="strike-text ml-1"
                                    />
                                </div>
                            )}
                            <p className="product-price">
                                <NumberFormat
                                    prefix={'Rp '}
                                    displayType={'text'}
                                    decimalSeparator=","
                                    thousandSeparator="."
                                    value={(details.price) - (details.price * details.discount / 100)}
                                />
                            </p>
                            <div className="d-flex flex-column">
                                <MDBInputGroup
                                    containerClassName="mb-3"
                                    prepend="Qty"
                                    type="number"
                                    value={jumlah}
                                    className="font-weight-bold"
                                    onChange={e => handleJumlah(e.target.value)}
                                />
                                <button
                                    className="btn btn-indigo m-0"
                                    onClick={handleAddToCart}
                                    disabled={isAdding}
                                >
                                    {
                                        isAdding
                                        ? <div className="spinner-border spinner-border-sm" role="status" />
                                        : <i className="fa fa-cart-plus" />
                                    }
                                    <span className="ml-2">
                                        Add To Cart
                                    </span>
                            </button>
                            </div>
                        </div>
                        <div className="col-md-8 mt-4 mt-md-0">
                            <h3 className="h3-responsive font-weight-bold opacity-70">
                                {details.title} {details.tahun_rilis && <small>({details.tahun_rilis})</small>}
                            </h3>
                            <h5 className="h5-responsive opacity-80 mt-2">
                                {details.publisher}
                            </h5>
                            <p className="opacity-70 mt-3">
                                {details.description}
                            </p>
                            <div>
                                <strong className="opacity-80">Genre : </strong>
                                {details.genre && details.genre.map(item => (
                                    <div key={item.id} className="badge badge-light mx-1">
                                        {item.genre}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <YouTube
                                onReady={onReady}
                                className="product-trailer rounded shadow"
                                videoId={details.youtube_link.split('=')[1]}
                            />
                        </div>
                    </div>

                </div>
            </MDBAnimation>
        );
};

export default DetailProduk;