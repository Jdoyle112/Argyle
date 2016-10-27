import { Component } from '@angular/core';
import { Auth } from './services/auth.service';
import { GroupsService } from './services/groups.service';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  providers: [ GroupsService ]
})

export class AppComponent { 
	constructor(private auth: Auth){

	}

}