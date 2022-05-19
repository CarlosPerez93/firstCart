import React from 'react'
import { Burger } from '../burger/Burger'
// import './Cart.scss'


export const Cart = ({ cart, setCart }) => {

    return (

        <div className='cart'>

            <h3>Carrito</h3>

            {cart.length === 0 ? (
                <p>No hay nada por aquí...</p>
            ) : (
                cart.map((burger) => (
                    <Burger
                        key={burger.id}
                        burger={burger}
                        cart={cart}
                        setCart={setCart}
                    />
                ))
            )}
            {/* {cart.map((e) => e)} */}


        </div>
    )
}
