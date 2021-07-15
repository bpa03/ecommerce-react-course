import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button 
      className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`} 
      {...otherProps} >
      {children}
    </button>
  )
}

export default Button
