import React from "react";

const Title = ({ children }) => {
  return (
    <>
      <h1>{children || "title text"}</h1>
    </>
  );
};

export default Title;
