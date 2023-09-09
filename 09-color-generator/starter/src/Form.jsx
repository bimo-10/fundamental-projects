import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addColor(color);
  }

  return (
    <section className="container">
      <h3>Color Generator</h3>
      <form action="" onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          name=""
          id=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
