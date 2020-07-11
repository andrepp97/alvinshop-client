import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { MDBAnimation } from 'mdbreact';

class DetailProduk extends Component {
    state = {
        data: {
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
    }

    // LIFECYCLE
    componentDidMount() {
        const productId = this.props.match.params.id
        console.log(productId)
    }

    // FUNCTIONS
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    // MAIN RENDER
    render() {
        const { data } = this.state

        return (
            <MDBAnimation type="fadeIn" id="page-wrapper">
                <div className="container">

                    <div
                        className="product-backdrop"
                        style={{ backgroundImage: `url(${data.backdrop})` }}
                    >
                        <div className="product-overlay" />
                    </div>

                    <div style={{ marginTop: '10rem' }}>
                        <div className="row mb-5">
                            <div className="col-md-4 text-center">
                                <img
                                    src={data.poster}
                                    alt={data.name}
                                    style={{ marginTop: '-10vh' }}
                                    className="img-fluid rounded"
                                />
                                <div>
                                    <button className="btn btn-brown w-responsive px-1 py-2 mt-3">
                                        <i className="fa fa-cart-plus mr-2" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h3 className="h3-responsive font-weight-bold opacity-70 mt-5">
                                    {data.name} <small>({data.year})</small>
                                </h3>
                                <h5 className="h5-responsive opacity-80 mt-2">
                                    {data.publisher}
                                </h5>
                                <p className="opacity-70 mt-3">
                                    {data.description}
                                </p>
                                <div>
                                    <strong className="opacity-80">Genre : </strong>
                                    {data.genre ? data.genre.map(item => (
                                        <div key={item.id} className="badge badge-light mx-1">
                                            {item.name}
                                        </div>
                                    )) : null}
                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">
                            <div className="col">
                                <YouTube
                                    videoId={data.videoId}
                                    onReady={this._onReady}
                                    className="w-100 rounded shadow"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </MDBAnimation>
        );
    }
}

export default DetailProduk;