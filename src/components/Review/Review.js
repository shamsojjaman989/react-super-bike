import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import './Review.css'

const Review = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>This is review Compo...!</h1>
            <div className="product-container">
            {
                products.map(product => <Cart
                key={product.id}
                product = {product}
                ></Cart>)
            }
            </div>
        </div>
    );
};

export default Review;