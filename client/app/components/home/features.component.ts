import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'features',
	templateUrl: 'features.component.html'
})

export class FeaturesComponent {
		
	blurbs = [
		{title: "Unlimited Groups", body: "Create as many groups as you want. Go nuts!", icon: "fa-list"},
		{title: "Multiple Chats within Groups", body: "Create multiple chats for different purposes within the same group.", icon: "fa-sitemap"},
		{title: "Create Polls", body: "Easily customize and create polls for your chats within the app.", icon: "fa-bar-chart"},
		{title: "Dynamic Calendars", body: "Create and display calendars within your groups which can be edited by members.", icon: "fa-calendar"},
		{title: "Notification Settings", body: "Plenty of options to customize when and where you receive notifications.", icon: "fa-bell-o"},
		{title: "Pin Items", body: "Within your chats, pin important information so it's always displayed for group members.", icon: "fa-thumb-tack"},
		{title: "Customizable Chat Options", body: "Chat creators and members alike have plenty of options to customize their chatting experience.", icon: "fa-toggle-off"},
		{title: "Leave Groups Quietly", body: "We all know how annoying it us to be thrown in an unwanted chat, and afraid to leave because everyone is alerted. With Argyle, you can leave chats at will without making a peep!", icon: "fa-user-secret"},
		{title: "Trip Tracking", body: "With trip tracking, you can see where group members are in real time. Now, that late friend who always says he's on his way will be out of excuses!", icon: "fa-map-marker"},
		{title: "Create Events", body: "Easily create events which members can RSVP to within Argyle. It will also sync with Argyle Calendars!", icon: "fa-plus-circle"},
		{title: "Create Tasks", body: "Working on a group project? Easily create tasks within the app and assign them to group members.", icon: "fa-check-square-o"},
		{title: "Integrations", body: "Argyle integrates with many of your favorite apps already such as Giphy, Twitter, Instagram, Facebook, and many more.", icon: "fa-exchange"}
	]	

}