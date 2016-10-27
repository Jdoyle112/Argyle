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

	constructor(private auth: Auth, private groupsService: GroupsService){
		
		this.groupsService.getGroups().subscribe(groups => {
			this.groups = groups;
		});

	}
}