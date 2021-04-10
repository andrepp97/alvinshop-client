import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MDBModal, MDBModalBody, MDBInput } from 'mdbreact';
import { BASE_URL } from '../../../5. Helper/settings';
import APIRequest from '../../../4. Api/APIRequest';
import Loader from '../../Loader';

const SearchModal = ({ isOpen, toggleSearch }) => {
    // REF
    const didMount = useRef(false)

    // STATE
    const [text, setText] = useState('')
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    // SEARCH FUNCTION
    const onSearch = useCallback(async () => {
        try {
            setLoading(true)

            const res = await APIRequest.get('user/searchProduct', {
                params: {
                    keyword: text
                }
            })
            const { data } = res
            setResult(data.data)

            console.log('Hasil Search', data)
        } catch (err) {
            console.log(err.response)
        } finally {
            setLoading(false)
        }
    }, [text])

    // LIFECYCLE
    useEffect(() => {
        if (didMount && text) {
            const debounceFunction = setTimeout(() => {
                onSearch()
            }, 1000)

            return () => clearTimeout(debounceFunction)
        } else {
            didMount.current = true
        }
    }, [onSearch, text])

    // RENDER
    return (
        <MDBModal isOpen={isOpen} toggle={toggleSearch}>

            <div style={{ height: '25px' }}>
                <span id="close-btn" onClick={toggleSearch}>
                    <i className="fa fa-times" />
                </span>
            </div>

            <MDBModalBody className="pt-0 px-4 my-3">

                <h4 className="h4-responsive text-center">
                    SEARCH
                </h4>

                <MDBInput
                    outline
                    icon="search"
                    label="Search the store"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />

                <div className="row">
                    {
                        loading
                            ? <Loader />
                            : result
                                ? result.length
                                    ? result.map(item => (
                                        <div id={item.product_id} className="col-6">
                                            <a
                                                className="invisible-card"
                                                href={`/product/${item.product_id}`}
                                            >
                                                <img
                                                    alt={item.name}
                                                    className="img-fluid rounded"
                                                    src={BASE_URL + item.product_image}
                                                />
                                                <span className="product-title">
                                                    {item.title}
                                                </span>
                                            </a>
                                        </div>
                                    ))
                                    : (
                                        <div className="col">
                                            <p>No Result</p>
                                        </div>
                                    )
                                : (
                                    <div className="col">
                                        <p className="opacity-60">
                                            Try typing 'Cyberpunk'
                                        </p>
                                    </div>
                                )
                    }
                </div>

            </MDBModalBody>

        </MDBModal>
    );
};

export default SearchModal;