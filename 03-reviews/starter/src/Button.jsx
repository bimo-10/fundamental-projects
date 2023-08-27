import React from "react";

const Button = ({ children, onClick = () => {}, className, style }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={onClick}>
      {children || "button text"}
    </button>
  );
};

export default Button;
