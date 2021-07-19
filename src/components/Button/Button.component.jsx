import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button 
      className={`custom-button ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""}`} 
      {...otherProps} >
      {children}
    </button>
  )
}

export default Button
