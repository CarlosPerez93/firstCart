import { useState, Fragment } from 'react'
import { Burger } from './components/burger/Burger'
import { Cart } from './components/cart/Cart'
import './sass/_main.scss'
import './App.scss'
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineMenu } from "react-icons/ai"
import Mexican from "./img/Chicken.png"
import Bacon from "./img/Criolla.png"
import Peasant from "./img/patagonia.png"
import MrBurger from "./img/Porteña.png"
import Special from "./img/Salteña.png"
import { Drawer } from 'antd'

function App() {

  //list burguers
  const [burgers, setBurgers] = useState([
    { id: 1, image: Mexican, name: "Burguer Mexian", price: 250 },
    { id: 2, image: Bacon, name: "Burguer Bacon", price: 300 },
    { id: 3, image: Peasant, name: "Burguer Peasant", price: 260 },
    { id: 4, image: MrBurger, name: "Burguer MrBurguer", price: 280 },
    { id: 5, image: Special, name: "Burguer Special", price: 350 }
  ])

  //state cart
  const [cart, setCart] = useState([])
  //state card
  const [visible, setVisible] = useState(false)

  const handleShowCard = () => {
    setVisible(!visible)

  }


  return (

    <Fragment >
      <div className='main'>
        <div className='header'>
          <AiOutlineMenu />
          <h1>Hamburger</h1>
          <div className='countCard' onClick={handleShowCard}>
            <p  >{cart.length}</p>
            <FiShoppingCart />
          </div>

        </div>
        <div className='body'>
          <p>Aprovecha solo por tiempo limitado combos 50% off!</p>
          <div className='burger'>
            {burgers.map((burger, index) => (


              <Burger
                key={burger.id}
                burger={burger}
                cart={cart}
                setCart={setCart}
                burgers={burgers}
              />

            ))}
          </div>

        </div>

        <div className="footer">HAMBURGER2020 - Todos los derechos reservados</div>


      </div>
      <Cart cart={cart} setCart={setCart} visible={!visible} setVisible={handleShowCard} />

    </Fragment >



  )
}

export default App
