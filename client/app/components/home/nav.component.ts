import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { Group } from '../../models/group';

@Component({
	moduleId: module.id,
	selector: 'navigation',
	templateUrl: 'nav.component.html'
})

export class NavComponent  {
	links = ["Home", "Learn More", "Contact Us"];
	groups: Group[];
	isClassVisible: false;
	userId: string;
	user: any;

	constructor(private auth: Auth, private groupsService: GroupsService){
		this.user = auth.user;
		this.userId = auth.user.user_id;
		console.log(JSON.parse(localStorage.getItem('profile')));
		console.log(auth.user);
		
		this.groupsService.getGroups(this.userId).subscribe(groups => {
			this.groups = groups;

			// sort the groups
			this.groups.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
		});
		console.log(JSON.parse(localStorage.getItem('profile')));
		console.log(auth.user);
	}


	
}