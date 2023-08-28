import React from "react";

const Button = ({ datas, setIndex }) => {
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <button key={data.id} onClick={() => setIndex(index)}>
            {data.company}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
