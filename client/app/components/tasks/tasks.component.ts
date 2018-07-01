import { Component } from '@angular/core';
import { TasksServices } from '../../services/tasks.services';
import { Task } from '../../../Task';

@Component({
    moduleId : module.id,
	selector : 'tasks',
	templateUrl : 'tasks.component.html'
})

export class TasksComponent{ 
	tasks : Task[];
	oneTask : Task;
	title : string;
	
	constructor(private tasksServices: TasksServices){
		// Add the services in the constructor to fetch all tasks
		this.tasksServices.getTasks()
			.subscribe(tasks => {
				// console.log(tasks);
				this.tasks = tasks;
			});
		}

	// Add new task in the list and the mongoDB
	addTask(event){
		event.preventDefault();
		var newTask = {
			title : this.title,
			isDone : false
		}
		// this.tasks.push(newTask);
		this.tasksServices.addTask(newTask)
			.subscribe(task => {
				this.tasks.push(task);
				this.title = '';
			}						
			);
		console.log(this.title);
	}

	// Delete task by _id
	deleteTask(id){
		var tasks = this.tasks;
		this.tasksServices.deleteTask(id).subscribe(data => {
			if(data.n == 1){
				for(var i=0;i<this.tasks.length; i++){
					if(tasks[i]._id == id){
						tasks.splice(i, 1);
					}
				}
			}
		});

	}

	// Add the services in the constructor to fetch one task
	getTask(id){
		this.tasksServices.getTask(id)
		.subscribe(task => {
			//console.log(task);
			this.oneTask = task;
		});
	}

	// Update the status of the task with a check or uncheck
	updateStatus(task){
		var _task = {
			_id : task._id,
			title: task.title,
			isDone : !task.isDone
		};

		this.tasksServices.updateStatus(_task).subscribe(data => {
			task.isDone = !task.isDone;
		});
	}
 }