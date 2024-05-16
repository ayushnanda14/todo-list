import PropTypes from "prop-types";

const ButtonSection = ({ action, setShowPopup, todoItem, handleAdd, handleSave, handleDelete }) => {

  const handleCancel = () => {
    setShowPopup(false);
  };

  switch (action) {
    case "edit":
      return (
        <div className="buttons-container">
          <button onClick={() => handleSave(todoItem)}>SAVE</button>
          <button onClick={() => handleDelete(todoItem)}>DELETE</button>
        </div>
      );
    case "add":
      return (
        <div className="buttons-container">
          <button onClick={handleCancel}>CANCEL</button>
          <button onClick={() => handleAdd(todoItem)}>ADD</button>
        </div>
      );
    default:
      return null; // It's a good practice to handle default cases
  }
};

ButtonSection.propTypes = {
  action: PropTypes.string.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  todoItem: PropTypes.object.isRequired,
  handleAdd: PropTypes.func,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default ButtonSection;
