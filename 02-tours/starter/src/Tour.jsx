import { useState } from "react";

export default function Tour({ tour, handleRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={tour.image} alt={tour.name} width="256px" height="256px" />
      <p>{tour.price}</p>
      <h3>{tour.name}</h3>
      {readMore ? (
        <p>{tour.info}</p>
      ) : (
        <p>{`${tour.info.substring(0, 200)}...`}</p>
      )}

      <button onClick={() => setReadMore((cur) => !cur)}>
        {readMore ? "read less" : "read more"}
      </button>

      <div>
        <button className="btn" onClick={() => handleRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}
