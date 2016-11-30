import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Auth } from '../../../services/auth.service';
import { DialoguesService } from '../../../services/dialogues.service';
import { Dialogue } from '../../../models/dialogue';
import { GroupComponent } from '../group.component';
import { Group } from '../../../models/group';

@Component({
	moduleId: module.id,
	selector: 'dialogues',
	templateUrl: 'dialogues.component.html',
    providers: [Dialogue, Group]
})

export class DialoguesComponent implements OnInit {
    profile: any;
    userEmail: string;
    username: string;
    userId: number;
    dialogues: Dialogue[];
    dialogueName: string;
    isJoined: boolean;

    @Input() groupId: any;
    @Output() sendDialogue = new EventEmitter<any>();

	constructor(private auth: Auth, private dialoguesService: DialoguesService){
		this.profile = JSON.parse(localStorage.getItem('profile'));
		this.userEmail = this.profile.email;
		this.username = this.profile.nickname;
		this.userId = this.profile.user_id;
	}	

    ngOnInit(){

        // get all dialogues for sidebar using group id
		this.dialoguesService.getDialogues(this.groupId).subscribe(dialogues => {
		    	this.dialogues = dialogues;
	  	});
    }


    getDialogue(event, dialogueId){
		event.preventDefault();
		this.sendDialogue.emit(dialogueId);
	}

    
    addDialogue(event){
		event.preventDefault();

		let dialogue = new Dialogue();
		dialogue.name = this.dialogueName;
		dialogue.admin = this.userId;
		dialogue.members = [this.userId];
		dialogue.public = true;
		dialogue.groupId = this.groupId;

		this.dialoguesService.addDialogue(dialogue)	
			.subscribe(dialogue => {
				this.dialogues.push(dialogue);
				this.dialogueName = '';
			});
	}

}