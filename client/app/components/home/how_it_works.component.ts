import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'how_it_works',
	templateUrl: 'how_it_works.component.html'
})

export class HowItWorksComponent {
	blurbs = [
		{title: "Install the App", description: "Install the app on your IOS device from the App Store, or use our web app.", icon: "fa-arrow-circle-o-down"},
		{title: "Create Chats", description: "Create as many separate chats as you'd like, and invite your friends! Each chat can be customized to your ideal preferences.", icon: "fa-comments"},
		{title: "Use our Features", description: "Argyle comes loaded with tons of group focused features. Scroll down to learn more!", icon: "fa-bolt"}
	]
}