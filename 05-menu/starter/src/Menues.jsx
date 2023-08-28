import React from "react";
import SingleMenu from "./SingleMenu";

const Menues = ({ menues }) => {
  return (
    <div>
      {menues.map((menu) => {
        return <SingleMenu key={menu.id} menu={menu} />;
      })}
    </div>
  );
};

export default Menues;
