import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addIdToCart, getStoredCart } from '../../utilities/localstorage';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([])

    const bottles = use(bottlesPromise)


    useEffect(() => {
        const cartBottles = []
        const storedCartIds = getStoredCart()
        // const cartBottles = bottles.filter(bottle => storedCartIds.includes(bottle.id))
        for (const id of storedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if (cartBottle) {
                cartBottles.push(cartBottle)
            }

        }
        console.log(cartBottles)
    }, [bottles])

    const handleAddToCart = (bottle) => {
        const updateCart = [...cart, bottle]
        console.log(updateCart)
        setCart(updateCart)
        addIdToCart(bottle.id)
    }


    return (
        <>
            <p>Bottle in Cart: {cart.length}</p>
            <div className='bottles-container'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)}
            </div>
        </>
    );
};

export default Bottles;