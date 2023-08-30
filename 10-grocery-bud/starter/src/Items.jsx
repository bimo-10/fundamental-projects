import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ cartItems, handleDeleteItem }) => {
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
