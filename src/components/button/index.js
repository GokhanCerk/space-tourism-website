import React from "react";

const Button = ({ name }) => {
  return (
    <button className="rounded-none text-white hover:border-b-2">{name}</button>
  );
};

export default Button;
