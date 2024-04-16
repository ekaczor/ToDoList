import './TaskBoard.css';
import Task from './Task';
import React from 'react';

const TaskBoard = () => {
return (
<div className='TaskBoard'>
<div className='above'>
<h1 className="title">TaskTide</h1>
<button className='button'>Add Task</button>
</div>
<div className='tasks'>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
    <Task taskCompleted='false' task='Do the dishes' category='House' dateDue='2024-04-20'/>
</div>
</div>
)}

export default TaskBoard;