import { Component, OnInit, OnDestroy } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { DialoguesService } from '../../services/dialogues.service';
import { Group } from '../../models/group';
import { Dialogue } from '../../models/dialogue';
import { ActivatedRoute }     from '@angular/router';
import { Member } from '../../models/member';
import { MembersService } from '../../services/members.service';

import { DialoguesComponent } from './dashboard/dialogues.component';
import { DialogueComponent } from './dashboard/dialogue.component';

@Component({
	moduleId: module.id,
	selector: 'group',
	templateUrl: 'group.component.html',
	providers: [ Group, Member ]
})

export class GroupComponent implements OnInit {
	group: Group = new Group();
	groupId: any;
	dialogues: Dialogue[];
	dialogue: any;
	id: number;
	name: string;
	profile: any;
	private sub: any;
	username: string;
	userEmail: string;
	dialogueName: string;
	admin: string;
	userId: string;
	urlPath: string;
	inputs: number[] = [1];
	members: Member[] =[]; // 2 things named member, could be issue
	memberEmail: string;
	isJoined: boolean;
	onlineUsers: string[]; 
	groupMembers: Array<string>;
	dialogueId: any;

	constructor(private auth: Auth, private groupsService: GroupsService, private route: ActivatedRoute, private dialoguesService: DialoguesService, private membersService: MembersService){

		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userEmail = this.profile.email;
		this.username = this.profile.nickname;
		this.userId = this.profile.user_id;

	}	

	addInput(event){
		event.preventDefault();
		this.inputs.push(2);
	}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
	       this.id = params['id']; 
	       this.urlPath = this.route.snapshot.url[0].path;

				
				// set online status
				/*var updGroup = this.group;
	  			updGroup.onlineUsers.push(this.userId);	
			  	this.groupsService.setStatus(this.id, updGroup).subscribe(group => {
			  		// set status to true
			  		console.log('group: '+group.users);
			  		
		  		});	  */			
	    });
		
		this.groupsService.getGroup(this.id).subscribe(data => {
			this.group._id = data._id;
			this.group.name = data.name;
			this.group.admin = data.admin;
			this.group.date_created = data.date_created;
			this.group.users = data.users;
			
			this.groupMembers = data.users;
			
			// get members
			for(let id of this.groupMembers){
				this.membersService.getMembers(id).subscribe(member => {
					this.groupMembers.push(member);
				});
			}
		});
	}


	addMembers(event){
		event.preventDefault();
		var newMember = {
			email: this.memberEmail,
			groupId: this.groupId
		}

		this.membersService.addMember(newMember).
			subscribe(member => {
				this.members.push(member);
				this.memberEmail = '';
			});
	}


	ngOnDestroy(){
		// set status to false
		this.sub.unsubscribe();
	}
}