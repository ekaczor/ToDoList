import React,  {useState} from 'react';
import './Task.css'

const Task = ({task, taskCompleted, category, dateDue}) => {

    // const [ , ] = useState

    return(
        <div className='task'>
        <div>{taskCompleted}</div>
        <div>{task}</div>
        <div>{category}</div>
        <div>{dateDue}</div>
        </div>
    )
}

export default Task;