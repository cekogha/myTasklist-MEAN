"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tasks_services_1 = require("../../services/tasks.services");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(tasksServices) {
        var _this = this;
        this.tasksServices = tasksServices;
        // Add the services in the constructor to fetch all tasks
        this.tasksServices.getTasks()
            .subscribe(function (tasks) {
            // console.log(tasks);
            _this.tasks = tasks;
        });
    }
    // Add new task in the list and the mongoDB
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        // this.tasks.push(newTask);
        this.tasksServices.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
        console.log(this.title);
    };
    // Delete task by _id
    TasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var tasks = this.tasks;
        this.tasksServices.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < _this.tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    // Add the services in the constructor to fetch one task
    TasksComponent.prototype.getTask = function (id) {
        var _this = this;
        this.tasksServices.getTask(id)
            .subscribe(function (task) {
            //console.log(task);
            _this.oneTask = task;
        });
    };
    // Update the status of the task with a check or uncheck
    TasksComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.tasksServices.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'tasks.component.html'
        }),
        __metadata("design:paramtypes", [tasks_services_1.TasksServices])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map