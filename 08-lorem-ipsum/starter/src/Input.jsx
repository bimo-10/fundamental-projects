import React from "react";

const Input = ({ value, handleChange, handleSubmit }) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraph:</label>
        <input
          type="number"
          placeholder="Enter a number"
          min="1"
          step="1"
          max="8"
          id="paragraph"
          name="paragraph"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Input;
