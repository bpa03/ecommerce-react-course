import React from 'react'
import { connect } from 'react-redux';


import './collectionItem.styles.scss';
import Button from '../Button/Button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  const handleClick = () => {
    addItemToCart(item);
  };

  return (
    <div className="collection-item">
      <div className="image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button inverted onClick={handleClick}> ADD TO CART </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
