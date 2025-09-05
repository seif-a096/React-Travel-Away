import { useState } from "react";
import "./index.css";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

function App() {
  let [items, setItems] = useState([]);
  let handleAddedItem = function (item) {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAdd={handleAddedItem} />
      <PackingList items={items} manipulateItems={setItems} />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Far Away✈️</h1>;
}
function Form({ handleAdd }) {
  let [description, setInput] = useState("");
  let [quantity, setOption] = useState(1);

  let options = new Array(20).fill(0);
  function handleSubmit(e) {
    e.preventDefault();
    let newItem = { description, quantity, packad: false, id: Date.now() };
    handleAdd(newItem);
    setInput("");
    setOption(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setOption(+e.target.value)}
        required
      >
        {options.map((_, i) => (
          <option value={i + 2} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setInput(e.target.value)}
        required
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, manipulateItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((i, index) => (
          <Item item={i} key={index} manipulateItems={manipulateItems} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer>
      <em>👜You have X items on your list, and you've already packed X(X%)</em>
    </footer>
  );
}
function Item({ item, manipulateItems }) {
  function handleRemove(id) {
    manipulateItems((items) => items.filter((i) => i.id !== id));
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button className="btn" onClick={() => handleRemove(item.id)}>
        ❌
      </button>
    </li>
  );
}
export default App;
