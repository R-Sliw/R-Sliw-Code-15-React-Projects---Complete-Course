import React from "react";

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {people.map((p) => {
        const { id, name, age, image } = p;
        return (
          <article key={id} className="person">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
