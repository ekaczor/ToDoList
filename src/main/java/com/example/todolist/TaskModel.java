package com.example.todolist;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TaskModel {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "task")
    private String task;

    @Column(name = "task_completed")
    private boolean taskCompleted;

    @Column(name = "category")
    private String category;

    @Column(name = "due_date")
    private LocalDate dateDue;
    
    public TaskModel() {
    }

    public TaskModel(String task, boolean taskCompleted, String category, LocalDate dateDue) {
        this.task = task;
        this.taskCompleted = taskCompleted;
        this.category = category;
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

    public LocalDate getDateDue() {
        return dateDue;
    }

    public void setDateDue(LocalDate dateDue) {
        this.dateDue = dateDue;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
