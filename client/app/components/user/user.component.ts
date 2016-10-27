import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'user-profile',
	templateUrl: 'user.component.html'
})

export class UserComponent {
	profile: any;

	constructor(private auth: Auth){
		this.profile = JSON.parse(localStorage.getItem('profile'));
	}	

}