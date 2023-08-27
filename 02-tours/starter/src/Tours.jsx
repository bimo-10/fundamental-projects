import { useState } from "react";
import Tour from "./Tour";

export default function Tours({ tours, handleRemove }) {
  return (
    <section>
      <h1>Our Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} handleRemove={handleRemove} />;
      })}
    </section>
  );
}
