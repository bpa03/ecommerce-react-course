import React from "react";

import "./input.styles.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label && <label className={`${otherProps.value.length ? "shrink" : "" } form-input-label`}>{label}</label>}
    </div>
  );
};

export default Input;
