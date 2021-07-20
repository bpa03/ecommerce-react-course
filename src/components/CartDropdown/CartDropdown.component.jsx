import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cartDropdown.styles.scss";

import CartItem from "../CartItem/CartItem.component";
import Button from "../Button/Button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, history }) => {

  const handleClick = () => {
    history.push('/checkout');
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(withRouter(CartDropdown));
