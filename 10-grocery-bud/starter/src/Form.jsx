import React from "react";

const Form = ({ item, onChange, onSubmit }) => {
  return (
    <form action="" className="form-control" onSubmit={onSubmit}>
      <input
        type="text"
        name="item"
        id="item"
        className="form-input"
        placeholder="Cart"
        value={item}
        onChange={onChange}
      />
      <button className="btn">Add Item</button>
    </form>
  );
};

export default Form;
