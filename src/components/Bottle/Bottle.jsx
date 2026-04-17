// import React, { useState } from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    const { img, name, stock, price } = bottle
    // const [isAddCart, setIsAddCart] = useState(false)
  
    return (
        <div className='bottle'>
            <img className='' src={img} alt=''></img>
            <div className='bottle-text'>
                <h2>Bottle Name:{name}</h2>
                <p>Price: {price}</p>
                <p>Remaining: {stock}</p>
                <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Bottle;