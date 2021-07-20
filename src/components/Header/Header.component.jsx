import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import Logo from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ user, hidden }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="img_logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
