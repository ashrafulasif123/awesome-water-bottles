import React, { use, useState, useEffect } from 'react'
import Bottle from '../Bottle/Bottle'
import './Bottles.css'
import { addIdToCartToLs, getStoredCart } from '../../utilities/localstorage'

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise)

    // state (single source of truth)
    const [cartIds, setCartIds] = useState([])

    // 🔥 load from localStorage (once when bottles ready)
    // useEffect(() => {
    //     const storedIds = getStoredCart()
    //     setCartIds(storedIds)
    // }, [bottles])

    // derived data
    const cartBottles = bottles.filter(bottle =>
        cartIds.includes(bottle.id)
    )
    console.log(cartBottles)
    const handleAddToCart = (bottle) => {
        if (cartIds.includes(bottle.id)) return

        // update state first (UI instantly)
        setCartIds(prev => [...prev, bottle.id])

        // update localStorage
        addIdToCartToLs(bottle.id)
    }

    return (
        <>
            <p>Bottle in Cart: {cartBottles.length}</p>

            <div className='bottles-container'>
                {bottles.map(bottle => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </>
    )
}

export default Bottles