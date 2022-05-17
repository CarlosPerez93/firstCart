import { useState, Fragment } from 'react'
import { Burger } from './components/burger/Burger'
import { Cart } from './components/cart/Cart'


function App() {

  //list burguers
  const [burgers, setBurgers] = useState([
    { id: 1, name: "Burguer Mexian", price: 250 },
    { id: 2, name: "Burguer Bacon", price: 300 },
    { id: 3, name: "Burguer Peasant", price: 260 },
    { id: 4, name: "Burguer MrBurguer", price: 280 },
    { id: 5, name: "Burguer Special", price: 350 }
  ])

  //state car
  const [cart, setCart] = useState([])



  return (

    <Fragment>

      {burgers.map((burger, index) => (


        <Burger
          key={burger.id}
          burger={burger}
          cart={cart}
          setCart={setCart}
          burgers={burgers}
        />

      ))}

      <Cart cart={cart} setCart={setCart} />
    </Fragment>



  )
}

export default App
