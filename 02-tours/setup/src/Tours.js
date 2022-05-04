import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, delHandle }) => {
  return (
    <section>
      <div>
        <h2>Ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} delHandle={delHandle} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
