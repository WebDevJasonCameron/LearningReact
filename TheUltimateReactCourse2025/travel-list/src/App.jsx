import {useState} from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackageList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear the list?');
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form
        onAddItems={ handleAddItems } />
      <PackingList
        items={items}
        onDeleteItem={ handleDeleteItems }
        onToggleItem={ handleToggleItem }
        onClearList={ handleClearList } />
      <Stats items={items} />
    </div>
  )
}