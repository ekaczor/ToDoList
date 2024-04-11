package com.example.todolist;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class TaskModel {

    @Id
    @GeneratedValue
    private Long id;

    private String task;
    private boolean taskCompleted;
    private Date dateDue;
    
    public TaskModel() {
    }

    public TaskModel(String task, boolean taskCompleted, Date dateDue) {
        this.task = task;
        this.taskCompleted = taskCompleted;
        this.dateDue = dateDue;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean isTaskCompleted() {
        return taskCompleted;
    }

    public void setTaskCompleted(boolean taskCompleted) {
        this.taskCompleted = taskCompleted;
    }

    public Date getDateDue() {
        return dateDue;
    }

    public void setDateDue(Date dateDue) {
        this.dateDue = dateDue;
    }

    
}
