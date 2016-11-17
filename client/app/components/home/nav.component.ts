import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';


@Component({
	moduleId: module.id,
	selector: 'navigation',
	templateUrl: 'nav.component.html'
})

export class NavComponent {
	links = ["Home", "Learn More", "Contact Us"];
	groups = [];
	isClassVisible: false;
	userId: string;
	profile: any; 

	constructor(private auth: Auth, private groupsService: GroupsService){

		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userId = this.profile.user_id;
		
		this.groupsService.getGroups(this.userId).subscribe(groups => {
			this.groups = groups;
			console.log('groups: '+this.groups);
		});

	}
}