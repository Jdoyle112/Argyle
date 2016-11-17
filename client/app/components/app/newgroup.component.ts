import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { Group } from '../../models/group';


@Component({
	moduleId: module.id,
	selector: 'new-group',
	templateUrl: 'newgroup.component.html',
	providers: [ Group ]
})

export class NewGroupComponent {
	groups: Group[];
	name: string;
	profile: any;
	username: string;
	userId: string;
	
	constructor(private auth: Auth, private groupsService: GroupsService){
		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userId = this.profile.user_id;

		this.groupsService.getGroups(this.userId).subscribe(groups => {
			this.groups = groups;
		});
	}

	addGroup(event){
		event.preventDefault();
		var newGroup = {
			name: this.name,
			active: true,
			users: this.profile.user_id,
			onlineUsers: []
		}

		this.groupsService.addGroup(newGroup)	
			.subscribe(group => {
				this.groups.push(group);
				this.name = '';
			});
	}


	deleteGroup(id){
		var groups = this.groups;

		this.groupsService.deleteGroup(id).subscribe(data => {
			if(data.n == 1){
				for(var i = 0; i < groups.length; i++){
					if(groups[i]._id == id){
						groups.splice(i, 1);
					}
				}
			}
		});
	}

}