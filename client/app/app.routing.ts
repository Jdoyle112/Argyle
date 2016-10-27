import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NewGroupComponent } from './components/app/newgroup.component';

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
	}
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);