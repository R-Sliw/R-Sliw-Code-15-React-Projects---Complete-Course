import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [mark, setMark] = useState(false);

  const markHandle = () => {
    setMark(!mark);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={markHandle}>
          {mark ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {mark && <p>{info}</p>}
    </article>
  );
};

export default Question;
