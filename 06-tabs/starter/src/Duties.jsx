import React from "react";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      <ul>
        {duties.map((duty) => {
          {
            /* buat id untuk objek duties */
          }
          const id = uuidv4();
          console.log(id);

          return (
            <div key={id}>
              <li>{duty}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Duties;
