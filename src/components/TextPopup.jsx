import { useState } from "react";
import PropTypes from "prop-types";
import ButtonSection from "./ButtonSection";

function TextPopup({
  currentItem,
  action,
  setShowPopup,
  handleAdd,
  handleDelete,
  handleSave,
}) {
  const [todoItem, setTodoItem] = useState(currentItem);

  return (
    <div className="popup-wrapper">
      <div className="popup-container">
        <div
          className="title-container"
          style={{
            borderBottom:
              todoItem.title.length === 0 ? "1px solid black" : "none",
          }}
        >
          <input
            type="text"
            value={todoItem.title}
            onChange={(e) => {
              setTodoItem((_todoItem) => ({
                ..._todoItem,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div
          className="description-container"
          style={{
            borderBottom:
              todoItem.description.length === 0 ? "1px solid black" : "none",
          }}
        >
          <input
            type="text"
            value={todoItem.description}
            onChange={(e) => {
              setTodoItem((_todoItem) => ({
                ..._todoItem,
                description: e.target.value,
              }));
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ButtonSection
            action={action}
            setShowPopup={setShowPopup}
            todoItem={todoItem}
            handleAdd={handleAdd}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

TextPopup.propTypes = {
  currentItem: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  handleSave: PropTypes.func,
};

export default TextPopup;
