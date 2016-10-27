import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'why_us-section',
	templateUrl: 'why_us.component.html'
})

export class WhyUsComponent {
	blurbs = [
		{head: "Seamless Integrations", content: "Argyle integrates with many of your favorite social media apps.", icon: "fa-plug"},
		{head: "Fully Featured", content: "Argyle comes with dozens of features built-in to support group interactions", icon: "fa-tachometer"},
		{head: "Fully Customizable", content: "Hundreds of customizable options for users and group admins alike to make your Argyle experience perfect for your group", icon: "fa-sliders"},
		{head: "Multiple Devices", content: "You can use Argyle across almost any device. We support both mobile, and web app functionality", icon: "fa-laptop"},
		{head: "Groups Focused", content: "Groups are our focus. It doesn't matter the size, if you desire better group communication, we have the answer", icon: "fa-users"},
		{head: "Secure Conversations", content: "Chat with the peace of mind that your messages are private and secure", icon: "fa-shield"}
	]
}