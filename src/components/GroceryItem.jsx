import PropTypes from "prop-types";

function GroceryItem({ item, toggleItem, onClick }) {
  return (
    <li
      className="todo-item-container"
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
      onClick={onClick}
    >
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleItem(item.id)}
        />
      </div>
      <div className="todo-item-text-wrapper">
        <p className="todo-item-title">{item.title}</p>
        <p className="todo-item-description">{item.description}</p>
      </div>
    </li>
  );
}

// Define the prop types
GroceryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleItem: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default GroceryItem;
