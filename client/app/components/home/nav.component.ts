import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { Group } from '../../models/group';

@Component({
	moduleId: module.id,
	selector: 'navigation',
	templateUrl: 'nav.component.html'
})

export class NavComponent {
	links = ["Home", "Learn More", "Contact Us"];
	groups: Group[];
	isClassVisible: false;
	userId: string;
	profile: any; 
	groupId: number;

	constructor(private auth: Auth, private groupsService: GroupsService){
<<<<<<< HEAD
		if(JSON.parse(localStorage.getItem('profile'))){
			this.profile = JSON.parse(localStorage.getItem('profile'));
			this.userId = this.profile.user_id;
		}
		//this.profile = JSON.parse(localStorage.getItem('profile'));
		//this.userId = this.profile.user_id;
=======

		this.profile = JSON.parse(localStorage.getItem('profile'));
		if(this.profile){
			this.userId = this.profile.user_id;
		}
>>>>>>> origin/groups
		
		if(this.userId){
			this.groupsService.getGroups(this.userId).subscribe(groups => {
				this.groups = groups;
				this.groupId = groups._id;
				// sort the groups
				this.groups.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
			});
		}
	}
}