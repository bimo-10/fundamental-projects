import React, { useState } from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
  const [activeId, setActiveId] = useState(false);

  function handleShow(id) {
    const newActiveId = id === activeId ? false : id;
    setActiveId(newActiveId);
  }

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question}
            handleShow={handleShow}
            activeId={activeId}
          />
        );
      })}
    </div>
  );
};

export default Questions;
