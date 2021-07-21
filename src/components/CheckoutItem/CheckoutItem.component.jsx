import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkoutItem.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {

  const handleClearItem = () => {
    clearItem(cartItem);
  };

  const handleAddItem = () => {
    addItem(cartItem);
  };

  const handleRemoveItem = () => {
    removeItem(cartItem);
  }

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">  
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem} >&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem} >&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleClearItem}>&#10005;</span>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
