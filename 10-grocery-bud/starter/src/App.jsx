import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState("");

  // handle change buat input item
  const handleChange = (e) => {
    setItem(e.target.value);
    // console.log(item);
  };

  // handle submit buat form
  const handleSubmit = (e) => {
    e.preventDefault();

    // kondisi jika item kosong
    if (!item) return;

    // buat fakeId
    const fakeId = Date.now();

    // push ke cartItems
    const newItem = [...cartItems, { id: fakeId, item }];
    setCartItems(newItem);
    console.log(cartItems);

    // set item kosong
    setItem("");
  };

  // handle delete item yang memiliki id
  const handleDeleteItem = (id) => {
    // filter cartItems
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  return (
    <main>
      <section className="section-center">
        <h4 className="title">Grocery Bud</h4>
        <div>
          <Form item={item} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
        <div>
          <Items cartItems={cartItems} handleDeleteItem={handleDeleteItem} />
        </div>
      </section>
    </main>
  );
};

export default App;
