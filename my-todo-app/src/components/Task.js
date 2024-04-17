import React,  {useState} from 'react';
import './Task.css'
import axios from 'axios';

const Task = ({task, taskCompleted, category, dateDue}) => {

    const handleEdit = () => console.log("Edit");

    const handleDelete = () => console.log("Delete");

    return(
        <div className='task'>
        <div class='contents'>{taskCompleted}</div>
        <div class='contents'>{task}</div>
        <div class='contents'>{category}</div>
        <div class='contents'>{dateDue}</div>
        <div class='edit_delete'>
        <div class='edit' onClick={handleEdit}>Edit</div>
        <div class='delete' onClick={handleDelete}>Delete</div>
        </div>
        </div>
    )
}

export default Task;