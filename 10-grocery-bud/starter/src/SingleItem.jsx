import React, { useState } from "react";

const SingleItem = ({ item, handleDeleteItem }) => {
  const [isCheck, setIsCheck] = useState(false);

  // handle checkbox
  const handleCheck = () => {
    setIsCheck((check) => !check);
    console.log(isCheck);
  };

  return (
    <div className="single-item">
      <input type="checkbox" name="item" id="item" onChange={handleCheck} />
      <p style={{ textDecoration: isCheck ? "line-through" : "none" }}>
        {item.item}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => handleDeleteItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
