import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, delHandle }) => {
  const [text, setText] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {text ? info : `${info.slice(0, 200)}...`}
          <button onClick={() => setText(!text)}>
            {!text ? "read more" : "read less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => delHandle(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
