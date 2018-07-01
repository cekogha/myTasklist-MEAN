import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class TasksServices{

    // Constructor of Services Tasks
    constructor(private http:Http){
        console.log('Tasks Service Initilized...');
    }


    // Service function to get all tasks
    getTasks(){
        // Return the method GET all tasks in the routes folder
        return this.http.get('http://localhost:3000/api/tasks')
            // Fetch the response from the GET method and put it in a map coolection
            .pipe(map(res => res.json()));
    }
    
    // Service function to get one task
    getTask(id){
        // Return the method GET one task by ObjectId in the routes folder
        return this.http.get('http://localhost:3000/api/tasks/:id')
            .pipe(map(res => res.json()));
    }

    // Service function to add a new task
    addTask(newTask){
        console.log(newTask);
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/tasks',
                 JSON.stringify(newTask), {headers : headers})
                 .pipe(map(res => res.json()));

    }
    
    // Service function to update the status of task
    updateStatus(task){
        console.log(task);
        var headers = new Headers();
        headers.append('content-type', 'application/json');
        return this.http.put('/api/tasks/'+task._id,
                 JSON.stringify(task), {headers : headers})
                 .pipe(map(res => res.json()));

    }


    // Service function to delete a task
    deleteTask(id){
        return this.http.delete('/api/tasks/'+id)
            .pipe(map(res => res.json()));
    }
}