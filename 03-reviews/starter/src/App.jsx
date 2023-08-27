import Button from "./Button";
import User from "./User";
import data from "./data";

import { useState } from "react";

const App = () => {
  // untuk menampilkan data di index ke berapa
  const [index, setIndex] = useState(0);

  // destructing data
  const { image, name, job, text } = data[index];

  // function handle prev
  function handlePrev() {
    // buat dan deklarasikan indexnya
    setIndex((curIndex) => {
      const newIndex = curIndex - 1;

      // buat kondisi jika index kurang dari 0
      if (newIndex < 0) {
        return data.length - 1;
      }

      // return indexnya
      return newIndex;
    });
  }

  // function handle next
  function handleNext() {
    // ubah indexnya
    setIndex((curIndex) => {
      // deklarasi index menjadi new index
      const newIndex = curIndex + 1;

      // buat kondisi jika data melebihi batas
      if (newIndex > data.length - 1) {
        return 0;
      }

      // kembalikan index dengan index baru
      return newIndex;
    });
  }

  // buat function handle random
  function handleRandom() {
    // deklarasi variable random
    let rand = Math.floor(Math.random() * data.length);
    console.log(rand);

    // buat kondisi jika index === random
    if (rand === index) rand = index + 1;

    // kondisi jika index lebih dari random
    if (rand > data.length - 1) {
      return 0;
    }
    // ubah index menjadi random
    setIndex((curIndex) => (curIndex = rand));
  }

  // console.log(user);

  return (
    <div>
      <h2>Reviews Starter</h2>
      <User image={image} name={name} job={job} text={text} />

      <Button style={{ marginRight: "18px" }} onClick={handlePrev}>
        {"<"}
      </Button>

      <Button onClick={handleNext}>{">"}</Button>
      <div>
        <Button style={{ margin: "20px 0" }} onClick={handleRandom}>
          Surprise me
        </Button>
      </div>
    </div>
  );
};
export default App;
