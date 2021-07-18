import React from 'react'

import './cartDropdown.styles.scss';

import Button from '../Button/Button.component';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
