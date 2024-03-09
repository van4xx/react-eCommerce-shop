import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House staff</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shopCart'>
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
