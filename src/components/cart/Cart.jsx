import React from 'react'
import { Burger } from '../burger/Burger'
import { Modal, Button } from 'antd'


export const Cart = ({ cart, setCart, visible, setVisible }) => {

    return (
        <Modal
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            visible={!visible}
            onCancel={setVisible}
            className='modal .ant-modal-body'
            closable={false}

        >

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



            </div>
        </Modal>

    )
}
