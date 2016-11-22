import { Component, OnInit, OnDestroy } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';
import { DialoguesService } from '../../services/dialogues.service';
import { Group } from '../../models/group';
import { Dialogue } from '../../models/dialogue';
import { ActivatedRoute }     from '@angular/router';
import { Member } from '../../models/member';
import { MembersService } from '../../services/members.service';


@Component({
	moduleId: module.id,
	selector: 'group',
	templateUrl: 'group.component.html',
	providers: [ Group, Member ]
})

export class GroupComponent implements OnInit {
	public group: any;
	groupId: string;
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

	constructor(private auth: Auth, private groupsService: GroupsService, private route: ActivatedRoute, private dialoguesService: DialoguesService, private membersService: MembersService){

		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userEmail = this.profile.email;
		this.username = this.profile.nickname;
		this.userId = this.profile.user_id;
		console.log(this.userId);
	}	

	addInput(event){
		event.preventDefault();
		this.inputs.push(2);
	}

	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
	       this.id = params['id']; 
	       this.urlPath = this.route.snapshot.url[0].path;

		   	// get the group

				
				// set online status
				/*var updGroup = this.group;
	  			updGroup.onlineUsers.push(this.userId);	
			  	this.groupsService.setStatus(this.id, updGroup).subscribe(group => {
			  		// set status to true
			  		console.log('group: '+group.users);
			  		
		  		});	  */			
	    });
		
		this.groupsService.getGroup(this.id).subscribe(group => {
			this.group = group;	
			this.name = group.name;
			this.groupMembers = group.users;
			
			// get members
			for(let id of this.groupMembers){
				console.log(id);
				this.membersService.getMembers(id).subscribe(member => {
					console.log(member);
				});
			}
		});

	    // get all dialogues for sidebar
		this.dialoguesService.getDialogues(this.id).subscribe(dialogues => {
		    	this.dialogues = dialogues;
	  	  	});
	}

	addDialogue(event){
		event.preventDefault();

		let dialogue = new Dialogue();
		dialogue.name = this.dialogueName;
		dialogue.admin = this.userId;
		dialogue.members = [this.userId];
		dialogue.groupId = this.id;
		dialogue.public = true;

		this.dialoguesService.addDialogue(dialogue)	
			.subscribe(dialogue => {
				this.dialogues.push(dialogue);
				this.dialogueName = '';
			});
	}

	getDialogue(event, dialogueId){
		event.preventDefault();
		this.dialoguesService.getDialogue(dialogueId).subscribe(dialogue => {
			this.dialogue = dialogue;
			this.dialogueName = dialogue.name;
			for(let member of dialogue.members){
				if(member == this.userId){
					// hide join btn
					this.isJoined = true;
				} else {
					// display join button
					this.isJoined = false;
				}
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

	joinDialogue(event, id){
		event.preventDefault();

		var updDialogue = {
			_id: this.dialogue._id,
			admin: this.dialogue.admin,
			name: this.dialogue.name,
			members: this.dialogue.members
		}
		updDialogue.members.push(this.userId);
		this.dialoguesService.joinDialogue(id, updDialogue).subscribe(

		);
	}

	ngOnDestroy(){
		// set status to false
		this.sub.unsubscribe();
	}
}