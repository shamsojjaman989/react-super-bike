import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
        <div className='home-container'>
            <div className="home-title">
                <h1>Choose Your Dream</h1>
                <h2>Product: {products.length}</h2>
                <h1>Buy Your Dream!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eos ab nobis perferendis cumque voluptas nesciunt illo dolorum 
                     distinctio accusantium sed.
                </p>
            </div>
            <div className="home-img">
                <img src='ducati.jpeg' alt="" />
            </div>
        </div>
        
        <div className="home-cart-container">
            <div className='home-cart'>
            {
                products.map(product => product.length ===3 && <Cart
                    key={product.id}
                    product = {product}
                    ></Cart>)
            }
            </div>
        </div>
        </div>
    );
};

export default Home;