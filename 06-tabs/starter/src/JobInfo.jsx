import React from "react";
import Duties from "./Duties";

const JobInfo = ({ datas, index }) => {
  // destructing datas
  // index untuk menampilkan data index ke berapa
  const { title, company, dates, duties } = datas[index];
  return (
    <div>
      <h3>{title}</h3>
      <h5>{company}</h5>
      <p>{dates}</p>

      {/* ambil duties dari data */}
      <Duties duties={duties} />
    </div>
  );
};

export default JobInfo;
