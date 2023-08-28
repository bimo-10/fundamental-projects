import React from "react";

const Question = ({ question, handleShow, activeId }) => {
  const { title, info, id } = question;

  // deklarasi activeId cth jika id 1 maka tanpilkan id 1
  activeId = activeId === id;

  return (
    <div className="question">
      <h3>{title}</h3>
      {activeId && <p>{info}</p>}
      <button className="btn question-btn" onClick={() => handleShow(id)}>
        click
      </button>
    </div>
  );
};

export default Question;
