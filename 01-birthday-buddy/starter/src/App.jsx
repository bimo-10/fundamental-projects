import { useState } from "react";
import data from "./data";

const App = () => {
  const [datas, setDatas] = useState(data);

  const handleClearAll = () => {
    setDatas([]);
    console.log(datas);
  };

  return (
    <section>
      <Title datas={datas} />

      <ItemsList datas={datas} />

      <Button onClick={handleClearAll}>Clear All</Button>
    </section>
  );
};

function Title({ datas }) {
  return <h2>{datas.length} Birthdays Today</h2>;
}

function ItemsList({ datas }) {
  return (
    <article>
      {datas.map((data) => (
        <Item data={{ ...data }} key={data.id} />
      ))}
    </article>
  );
}

function Item({ data }) {
  return (
    <div className="person">
      <img src={data.image} alt="" />
      <div>
        <h5>{data.name}</h5>
        <p>{data.age}</p>
      </div>
    </div>
  );
}

function Button({ children, type, onClick = () => {} }) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children || "Button Text"}
    </button>
  );
}

export default App;
