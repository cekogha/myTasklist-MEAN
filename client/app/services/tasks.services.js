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
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
// import 'rxjs/add/operator/map';
var TasksServices = /** @class */ (function () {
    // Constructor of Services Tasks
    function TasksServices(http) {
        this.http = http;
        console.log('Tasks Service Initilized...');
    }
    // Service function to get all tasks
    TasksServices.prototype.getTasks = function () {
        // Return the method GET all tasks in the routes folder
        return this.http.get('http://localhost:3000/api/tasks')
            // Fetch the response from the GET method and put it in a map coolection
            .pipe(operators_1.map(function (res) { return res.json(); }));
    };
    // Service function to get one task
    TasksServices.prototype.getTask = function (id) {
        // Return the method GET one task by ObjectId in the routes folder
        return this.http.get('http://localhost:3000/api/tasks/:id')
            .pipe(operators_1.map(function (res) { return res.json(); }));
    };
    // Service function to add a new task
    TasksServices.prototype.addTask = function (newTask) {
        console.log(newTask);
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/tasks', JSON.stringify(newTask), { headers: headers })
            .pipe(operators_1.map(function (res) { return res.json(); }));
    };
    // Service function to update the status of task
    TasksServices.prototype.updateStatus = function (task) {
        console.log(task);
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        return this.http.put('/api/tasks/' + task._id, JSON.stringify(task), { headers: headers })
            .pipe(operators_1.map(function (res) { return res.json(); }));
    };
    // Service function to delete a task
    TasksServices.prototype.deleteTask = function (id) {
        return this.http.delete('/api/tasks/' + id)
            .pipe(operators_1.map(function (res) { return res.json(); }));
    };
    TasksServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TasksServices);
    return TasksServices;
}());
exports.TasksServices = TasksServices;
//# sourceMappingURL=tasks.services.js.map