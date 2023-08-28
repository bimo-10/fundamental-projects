import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menues from "./Menues";
import Categories from "./Categories";

// membuat all categories
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menues, setMenues] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  // console.log
  console.log(categories);
  console.log(menues);

  // fungsi untuk filter item untuk categories
  function filterItems(category) {
    //kondisi jika klik categories all
    if (category === "all") {
      setMenues(data);
      return;
    }
    // membuat filter kategories
    const newMenu = data.filter((item) => {
      return item.category === category;
    });

    // ubah menu ke newMenu
    setMenues(newMenu);
  }

  return (
    <main>
      <section>
        <Title>Our Menu</Title>
        <Categories categories={categories} filterItems={filterItems} />
        <Menues menues={menues} />
      </section>
    </main>
  );
};
export default App;
