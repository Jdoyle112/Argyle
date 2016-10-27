import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { Group } from '../../models/group';


@Component({
	moduleId: module.id,
	selector: 'new-group',
	templateUrl: 'newgroup.component.html'
})

export class NewGroupComponent {
	groups: Group[];
	name: string;
	
	constructor(private auth: Auth, private groupsService: GroupsService){
		this.groupsService.getGroups().subscribe(groups => {
			this.groups = groups;
		});
	}

	addGroup(event){
		event.preventDefault();
		var newGroup = {
			name: this.name,
			active: true
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