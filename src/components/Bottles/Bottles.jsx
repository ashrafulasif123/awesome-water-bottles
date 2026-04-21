import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addIdToCartToLs, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)

    useEffect(() => {
        const cartBottles = []
        const cartIds = getStoredCart()
        for (const cartId of cartIds) {
            const cartBottle = bottles.find(bottle => cartId === bottle.id)
            if (cartBottle) {
                cartBottles.push(cartBottle)
            }

        }
        setCart(cartBottles)

    }, [bottles])
    console.log(cart)

    const handleAddToCart = (bottle) => {
        if (cart.find(c => c.id === bottle.id)) return alert('Duplicate ID')
        addIdToCartToLs(bottle.id)
        setCart([...cart, bottle])
    }

    const handleDeleteFromCart = (bottle) => {
        const updateCart = cart.filter(cartBottle => cartBottle.id !== bottle.id)
        setCart(updateCart)

        const updateCartIds = updateCart.map(cartBottle => cartBottle.id)
        localStorage.setItem("cart", JSON.stringify(updateCartIds))
    }

    return (
        <>
            <p>Total Bottles: {bottles.length}</p>

            <div className='bottles-container'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)}
            </div>
            <p>Bottle in Cart: {cart.length}</p>
            <div className='bottles-container'>
                {
                    cart.map(bottle => <Cart key={bottle.id} bottle={bottle} handleDeleteFromCart={handleDeleteFromCart}></Cart>)
                }
            </div>
        </>
    );
};

export default Bottles;