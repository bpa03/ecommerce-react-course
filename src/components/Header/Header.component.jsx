import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import Logo from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase";

const Header = ({ user }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user
})

export default connect(mapStateToProps)(Header);
