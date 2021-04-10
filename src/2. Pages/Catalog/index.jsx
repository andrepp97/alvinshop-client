import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBAnimation,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdbreact';
import './catalog.css';

// COMPONENTS
import CarouselFull from './components/CarouselFull';
import Carousel from './components/Carousel';
import Partner from './components/Partner';
import Loader from '../../1. Components/Loader';
import ProductCard from '../../1. Components/ProductCard';
import APIRequest from '../../4. Api/APIRequest';

const Catalog = () => {
    // PARAM
    const { key } = useParams()

    // STATE
    const [recommended, setRecommended] = useState(null)
    const [offer, setOffer] = useState(null)
    const [categories, setCategories] = useState([])
    const [genres, setGenres] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedGenre, setSelectedGenre] = useState('')
    const [products, setProducts] = useState(null)

    // GET DATA
    const getFilters = useCallback(async () => {
        try {
            const query = { device_id: key }
            const res = await APIRequest.get('user/getListFilter', { params: query })
            const { data } = res.data
            setCategories(data.category)
            setGenres(data.genre)
        } catch (err) {
            console.log('Error Filters', err)
        }
    }, [key])

    const getProductByFilters = useCallback(async () => {
        try {
            const body = {
                genre_id: selectedGenre,
                category_id: selectedCategory,
            }
            const res = await APIRequest.post('user/getProductByGenreAndCategory', body)
            const { data } = res.data
            console.log('Hasil Filter', data)
            setProducts(data)
        } catch (err) {
            console.log('Error Product by Filters', err)
        }
    }, [selectedGenre, selectedCategory])

    const getRecommended = async () => {
        try {
            const res = await APIRequest.get('user/recommendProduct')
            // console.log('Recommended', res.data.data)
            const { data } = res.data
            setRecommended(data)
        } catch (err) {
            console.log('Error Recommended', err)
        }
    }

    const getOffer = async () => {
        try {
            const res = await APIRequest.get('user/todayOffer')
            // console.log('Todays Offer', res.data.data)
            const { data } = res.data
            setOffer(data)
        } catch (err) {
            console.log('Error Today Offer', err)
        }
    }

    // LIFECYCLE
    useEffect(() => {
        getFilters()
    }, [getFilters])

    useEffect(() => {
        getProductByFilters()
    }, [getProductByFilters])

    useEffect(() => {
        getOffer()
        getRecommended()
    }, [])

    // RENDER
    return (
        <MDBAnimation type="fadeIn">

            <CarouselFull />

            <div className="container-fluid pb-5 mt-5 px-4 px-md-5">

                <div className="row mt-5">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className="sticky-top pt-4 pt-lg-5 mt-n3">
                            <div>
                                <p className="font-weight-bold spacing-1 opacity-80">
                                    CATEGORY
                                </p>
                                <hr />
                                <div className="list-group">
                                    <MDBListGroup>
                                        {categories.map(item => (
                                            <MDBListGroupItem
                                                hover
                                                key={item.id}
                                                className="pointer-cursor border-0"
                                                active={selectedCategory === item.id}
                                                onClick={() => setSelectedCategory(item.id)}
                                            >
                                                {item.name}
                                            </MDBListGroupItem>
                                        ))}
                                    </MDBListGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-9 pt-4">

                        <span className="text-uppercase font-weight-bolder spacing-2">
                            Recommended
                        </span>
                        {recommended ? <Carousel data={recommended} /> : <Loader />}

                        <span className="text-uppercase font-weight-bolder spacing-2">
                            Today's Offer
                        </span>
                        {offer ? <Carousel data={offer} /> : <Loader />}


                        <div className="my-6">
                            <div
                                id="genre-section"
                                className="border-top border-bottom mb-3"
                            >
                                {genres.map(item => (
                                    <MDBBtn
                                        key={item.id}
                                        id="btn-genre"
                                        color="indigo"
                                        className="rounded-pill"
                                        outline={selectedGenre !== item.id}
                                        onClick={() => setSelectedGenre(item.id)}
                                    >
                                        {item.name}
                                    </MDBBtn>
                                ))}
                            </div>
                            <div className='row'>
                                {
                                    products
                                        ? products.length
                                            ? products.map(product => (
                                                <div
                                                    key={product.product_id}
                                                    className="col-sm-6 col-md-4 col-xl-3"
                                                >
                                                    <ProductCard item={product} />
                                                </div>
                                            ))
                                            : (
                                                <div className="col">
                                                    <p>No Result</p>
                                                </div>
                                            )
                                        : <Loader />
                                }
                            </div>
                        </div>

                        <span className="text-uppercase font-weight-bolder spacing-2">
                            Our Partners
                        </span>
                        <Partner />

                    </div>

                </div>

            </div>

        </MDBAnimation>
    );
};

export default Catalog;