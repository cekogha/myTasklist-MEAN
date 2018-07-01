import { Component } from '@angular/core';
import { TasksServices } from './services/tasks.services';

@Component({
	moduleId : module.id,
	selector : 'my-app',
	templateUrl: 'app.component.html',
	providers: [TasksServices]

})

export class AppComponent{  }