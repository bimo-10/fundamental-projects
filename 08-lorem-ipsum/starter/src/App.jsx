import { useState } from "react";
import data from "./data";
import Input from "./Input";

const App = () => {
  // buat array kosong untuk diisi nanti
  const [lorem, setLorem] = useState([]);

  // buat value untuk menentukan data ke berapa
  const [value, setValue] = useState(1);

  // buat handle change untuk merubah value di input form
  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  // buat handle submit untuk merubah data
  const handleSubmit = (e) => {
    e.preventDefault();

    // buat slice
    const slice = data.slice(0, value);
    console.log(slice);

    // lalu masukan slice ke dalam array
    setLorem(slice);
  };

  return (
    <main>
      <section>
        <Input
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div>
          <div className="lorem-text">
            {lorem.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
