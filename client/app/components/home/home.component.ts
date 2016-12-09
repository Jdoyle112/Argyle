import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'home',
  template: '<navigation></navigation><header-hero></header-hero><why_us-section></why_us-section><how_it_works></how_it_works><features></features><testemonials></testemonials>',
})
export class HomeComponent { 
	constructor(){
	
	}

}