import React from "react";

const SingleMenu = ({ menu }) => {
  return (
    <div>
      <img src={menu.img} alt={menu.title} width="256rem" height="200rem" />
      <h3>{menu.title}</h3>
      <p>{menu.price}</p>
      <p>{menu.desc}</p>
    </div>
  );
};

export default SingleMenu;
