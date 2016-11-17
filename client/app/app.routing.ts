import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NewGroupComponent } from './components/app/newgroup.component';
import { GroupComponent } from './components/app/group.component';

import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'profile',
		component: UserComponent,
		canActivate: [ AuthGuard ]
	},	
	{
		path: 'new_group',
		component: NewGroupComponent
	},
	{
		path: 'group/:id',
		component: GroupComponent
	},
	{
		path: 'dialogue/:id',
		component: GroupComponent
	}	
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);