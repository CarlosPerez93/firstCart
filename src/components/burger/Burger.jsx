import React from 'react'

export const Burger = ({ burger, cart, setCart, burgers }) => {


    //save const state props
    const { name, price, id } = burger;

    //add burguers
    const addBurger = id => {
        // const burger = burgers.filter((burger) => burger.id === burgers.id)
        const burger = burgers.filter(value => value.id === id)
        setCart([...cart, ...burger])

    }
    //del burguers
    const delBurger = (id) => {

        const burgers = cart.filter(burger => burger.id !== id)
        setCart(burgers)
    }




    return (

        <div>
            <h3>Burgers</h3>

            <ul>
                <li>{name}</li>
                <li>${price}</li>
                {burgers ? (
                    <button type='button' onClick={() => addBurger(id)}>Add Car</button>

                ) : (
                    <>
                        <button type='button' onClick={() => addBurger(id)}>Confirm</button>
                        <button type='button' onClick={() => delBurger(id)}>Delete</button>
                    </>

                )}
            </ul>
        </div>
    )
}
