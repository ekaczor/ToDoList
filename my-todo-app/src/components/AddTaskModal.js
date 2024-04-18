import React from "react";
import "./AddTaskModal.css";

const AddTaskModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="exit" onClick={onClose}>
        X
      </div>
      <div className="top">
        <div className="titleModal">Add Task</div>
      </div>
      <div className="userInput">
        <label htmlFor="task">
          Task Description
          <input
            type="text"
            placeholder="ex. File your taxes"
            required
            maxLength="100"
          />
        </label>
        <label htmlFor="category">
          Category
          <input type="text" placeholder="ex. Home" required maxLength="50" />
        </label>
        <label htmlFor="dateDue">
          Date Due
          <input type="date" />
        </label>
      </div>
      <button className="finishButton" onClick={onClose}>
        Finish Task
      </button>
    </div>
  );
};

export default AddTaskModal;
