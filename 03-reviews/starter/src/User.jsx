import React from "react";

const User = ({ image, name, job, text }) => {
  return (
    <div>
      <img src={image} alt={name} width={"256px"} height={"256px"} />
      <h3>{name}</h3>
      <p>{job}</p>
      <p>{text}</p>
    </div>
  );
};

export default User;
