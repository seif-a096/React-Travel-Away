import { useState } from "react";
import "./index.css";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false },
];

function App() {
  let [items, setItems] = useState([...initialItems]);
  let handleAddedItem = function (item) {
    setItems((items) => [...items, item]);
  };
  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }
  let count = items.length;
  let packed = items.reduce((acc, item) => (item.packed ? ++acc : acc), 0);
  let percentage = Math.round((packed / count) * 100);
  return (
    <div className="app">
      <Logo />
      <Form handleAdd={handleAddedItem} />
      <PackingList
        items={items}
        manipulateItems={setItems}
        handlePacked={handlePacked}
        setItems={setItems}
      />
      <Stats count={count} packed={packed} percentage={percentage} />
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
    let newItem = { description, quantity, packed: false, id: Date.now() };
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
          <option value={i + 1} key={i}>
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
function PackingList({ items, manipulateItems, handlePacked, setItems }) {
  function handleClear() {
    let confirm = window.confirm("Are you sure you wanna delete everything ?");
    if (confirm) setItems([]);
  }
  let [sortOption, setSortoption] = useState("Order");
  let sortedItems;
  switch (sortOption) {
    case "Order": {
      sortedItems = items.slice().sort((a, b) => a.id - b.id);

      break;
    }
    case "alphabetically": {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

      break;
    }
    case "Packed": {
      sortedItems = items.slice().sort((a, b) => -+a.packed + +b.packed);

      break;
    }

    default:
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((i, index) => (
          <Item
            item={i}
            key={index}
            manipulateItems={manipulateItems}
            handlePacked={handlePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          className={items.length === 0 ? "empty-list" : ""}
          value={sortOption}
          onChange={(e) => setSortoption(e.target.value)}
        >
          <option value="Order">Sort by Insertion Order</option>
          <option value="alphabetically">alphabetical order </option>
          <option value="Packed">Packed First</option>
        </select>
        <button
          className={items.length === 0 ? "empty-list" : ""}
          onClick={handleClear}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
function Stats({ count, packed, percentage }) {
  if (count === 0)
    return (
      <p
        style={{
          display: "inline-block",
          width: "100%",
          background: "#f03e3e",
          textAlign: "center",
        }}
        className="footer"
      >
        <em>Start adding items to your packing list⏳</em>
      </p>
    );
  return (
    <footer>
      <em
        style={{ width: "100%", textAlign: "center", display: "inline-block" }}
        className={percentage === 100 ? "all-done" : "pending"}
      >
        {percentage === 100
          ? `You've got everything, Ready to go✈️`
          : `👜You have ${count} items on your list, and you've already packed ${packed}(${percentage}%)`}
      </em>
    </footer>
  );
}
function Item({ item, manipulateItems, handlePacked }) {
  function handleRemove(id) {
    manipulateItems((items) => items.filter((i) => i.id !== id));
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handlePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleRemove(item.id)}>❌</button>
    </li>
  );
}
export default App;
