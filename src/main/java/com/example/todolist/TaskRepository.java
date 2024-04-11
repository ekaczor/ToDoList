package com.example.todolist;

import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<TaskModel, Long> {

    // getAllTasks()
    // getTask(Long id)
    // updateTasks(Task task)
    // deleteTask(Long id)

}
