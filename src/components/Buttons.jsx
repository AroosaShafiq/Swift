import React from "react";

export const Buttons = ({ name, style }) => {
  return (
    <div>
      <button className={style}>{name}</button>
    </div>
  );
};
