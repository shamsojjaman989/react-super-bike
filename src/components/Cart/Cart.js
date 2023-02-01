import React from 'react';

const Cart = (props) => {
    const {id, name, seller, price, img} = props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{seller}</h4>
            <p>Price: $<small>{price}</small></p>
        </div>
    );
};

export default Cart;