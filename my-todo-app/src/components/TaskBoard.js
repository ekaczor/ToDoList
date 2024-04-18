import "./TaskBoard.css";
import Task from "./Task";
import React, { useState } from "react";

import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openAddTask = () => {
    setModalOpen(true);
  };

  const closeAddTask = () => {
    setModalOpen(false);
  };

  return (
    <div className="TaskBoard">
        <div className="above">
          <h1 className="title">TaskTide</h1>
          <button className="button" onClick={openAddTask}>
            Add Task
          </button>
        </div>
        <div className="tasks">
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          <Task
            taskCompleted="false"
            task="Do the dishes"
            category="House"
            dateDue="2024-04-20"
          />
          </div>
        
      
      {modalOpen && <AddTaskModal onClose={closeAddTask}/>}
    </div>
  );
};

export default TaskBoard;
