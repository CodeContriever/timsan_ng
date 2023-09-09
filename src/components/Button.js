import React from "react";

const Button = ({ children, onClick, className }) => {
  // Default button styles
  const defaultStyles = "px-8 py-2  text-center rounded-lg cursor-pointer";

  // Combine default styles with any additional classes provided as props
  const buttonStyles = `${defaultStyles} ${className}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
