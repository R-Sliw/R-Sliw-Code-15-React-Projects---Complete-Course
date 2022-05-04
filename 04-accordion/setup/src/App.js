import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);

  const newData = question.map((question) => (
    <SingleQuestion key={question.id} {...question} />
  ));

  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section>{newData}</section>
      </div>
    </main>
  );
}

export default App;
