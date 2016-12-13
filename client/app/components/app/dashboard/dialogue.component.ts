import { Component, OnInit, OnDestroy, Input, SimpleChange } from '@angular/core';
import { Auth } from '../../../services/auth.service';
import { DialoguesService } from '../../../services/dialogues.service';
import { Dialogue } from '../../../models/dialogue';
import { GroupComponent } from '../group.component';
import { Group } from '../../../models/group';

@Component({
	moduleId: module.id,
	selector: 'dialogue',
	templateUrl: 'dialogue.component.html',
	providers: [Dialogue, Group]
})

export class DialogueComponent implements OnInit {
    profile: any;
    userEmail: string;
    username: string;
    userId: number;
    dialogue: Dialogue;
    name: string;
    isJoined: boolean;
    dialogueName: string;

	@Input() groupId: any;
	@Input() dialogueId: any;
	
	constructor(private auth: Auth, private dialoguesService: DialoguesService){
		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userEmail = this.profile.email;
		this.username = this.profile.nickname;
		this.userId = this.profile.user_id;
	}	

	ngOnInit(){
		console.log(this.dialogueId);
	}

	ngOnChanges(changes: SimpleChange){
		if(this.dialogueId){
			this.dialoguesService.getDialogue(this.dialogueId).subscribe(dialogue => {
				this.dialogue = dialogue;
				console.log('dialouge: '+this.dialogue);
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

}