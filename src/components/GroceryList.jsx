import { useState } from "react";
import GroceryItem from "./GroceryItem";
import TextPopup from "./TextPopup";

function GroceryList() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [action, setAction] = useState("add");
  const [currentItem, setCurrentItem] = useState({
    id: "",
    title: "",
    completed: false,
    description: "",
  });

  const handleAdd = (todoItem) => {
    if (todoItem.title.trim().length === 0) {
      alert("Please Enter a title.");
    } else {
      setItems((_items) => [..._items, todoItem]);
      setShowPopup(false);
    }
  };

  const handleSave = (todoItem) => {
    setItems((_items) =>
      _items.map((item) => (item.id === todoItem.id ? { ...todoItem } : item))
    );
    setShowPopup(false);
  };

  const handleDelete = (todoItem) => {
    setItems((_items) => _items.filter((item) => item.id !== todoItem.id));
    setShowPopup(false);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    setCurrentItem({ id: Date.now(), title: "", description: "" });
    setAction("add");
    setShowPopup(true);
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onItemClick = (item) => {
    setCurrentItem({
      id: item.id,
      title: item.title,
      completed: item.completed,
      description: item.description,
    });
    setAction("edit");
    setShowPopup(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {showPopup ? (
        <TextPopup
          currentItem={currentItem}
          action={action}
          setShowPopup={setShowPopup}
          handleAdd={handleAdd}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      ) : null}

      <div className="todo-list-header">
        <div className="header-text-wrapper">
          <h4 className="header-text">🍉 GROCERIES</h4>
        </div>
        <div className="filter-container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 20C10.7167 20 10.4793 19.904 10.288 19.712C10.0967 19.52 10.0007 19.2827 10 19V13L4.2 5.6C3.95 5.26667 3.91267 4.91667 4.088 4.55C4.26333 4.18333 4.56733 4 5 4H19C19.4333 4 19.7377 4.18333 19.913 4.55C20.0883 4.91667 20.0507 5.26667 19.8 5.6L14 13V19C14 19.2833 13.904 19.521 13.712 19.713C13.52 19.905 13.2827 20.0007 13 20H11ZM12 12.3L16.95 6H7.05L12 12.3Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <ul className="todo-list">
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <div className="todo-item-container" onClick={handleAddItem}>
            <button className="add-button" type="submit">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 12.5H0.5V9.5H9.5V0.5H12.5V9.5H21.5V12.5H12.5V21.5H9.5V12.5Z"
                  fill="#707070"
                />
              </svg>
            </button>
            <div className="todo-item-text-wrapper">
              <p className="todo-item-title">Add New Item</p>
              <p className="todo-item-description">Add description</p>
            </div>
          </div>
        </li>
        {items.map((item) => (
          <GroceryItem
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            onClick={() => onItemClick(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
