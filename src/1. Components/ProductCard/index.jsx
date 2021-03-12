import React from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../5. Helper/settings';

const ProductCard = ({item}) => {
    return item
    ? (
        <Link
            className="invisible-card"
            to={`/product/${item.product_id}`}
        >
            <img
                alt={item.name}
                className="img-fluid rounded"
                src={BASE_URL + item.product_image}
            />
            <span className="product-title">
                {item.title}
            </span>
        </Link>
    )
    : null
}

export default ProductCard
