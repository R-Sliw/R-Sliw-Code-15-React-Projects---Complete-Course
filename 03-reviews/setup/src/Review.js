import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const loopHandle = (person) => {
    if (person > people.length - 1) {
      return 0;
    }
    if (person < 0) {
      return people.length - 1;
    }
    return person;
  };

  const prevHandel = () => {
    setIndex((index) => {
      const personPlus = index + 1;
      return loopHandle(personPlus);
    });
  };

  const nextHandel = () => {
    setIndex((index) => {
      const personMinus = index - 1;
      return loopHandle(personMinus);
    });
  };

  const randomHandel = () => {
    let rI = Math.floor(Math.random() * people.length);

    if (index === rI) {
      rI = index + 1;
    }
    console.log(loopHandle(rI), index, rI);
    setIndex(loopHandle(rI));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevHandel}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextHandel}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomHandel}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
