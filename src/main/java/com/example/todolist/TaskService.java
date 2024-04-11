package com.example.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<TaskModel> getAllTasks() {
        List<TaskModel> tasks = new ArrayList<>();
        taskRepository.findAll()
        .forEach(tasks::add);
        return tasks;
    }

    public void addTask(TaskModel task){
        taskRepository.save(task);
    }
}
