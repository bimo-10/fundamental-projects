import { useState } from "react";

import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <Questions questions={questions} />
      </section>
    </main>
  );
};
export default App;
