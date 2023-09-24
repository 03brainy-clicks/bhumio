import React from "react";

const Button = ({ title, style, trigger = () => {} }) => {
  const classes = `animate py-2 px-5 text-white bg-bhumio-primary rounded text-sm font-medium hover:bg-bhumio-dark animate  ${style}`;
  return (
    <button
      onClick={() => {
        trigger();
      }}
      className={classes}
    >
      {title}
    </button>
  );
};

export default Button;
