import React from 'react';

const Cart = ({ bottle, handleDeleteFromCart }) => {

    const { img, name, stock, price } = bottle

    return (
        <div className='bottle'>
            <img className='' src={img} alt=''></img>
            <div className='bottle-text'>
                <h2>Bottle Name:{name}</h2>
                <p>Price: {price}</p>
                <p>Remaining: {stock}</p>
                <button onClick={() => handleDeleteFromCart(bottle)}>Delete</button>
            </div>
        </div>
    );
};

export default Cart;