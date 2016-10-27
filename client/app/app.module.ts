import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

/* components */
import { NavComponent } from './components/home/nav.component';
import { HeaderComponent } from './components/home/header.component';
import { WhyUsComponent } from './components/home/why_us.component';
import { HowItWorksComponent } from './components/home/how_it_works.component';
import { FeaturesComponent } from './components/home/features.component';
import { TestemonialsComponent } from './components/home/testemonials.component';
import { HomeComponent } from './components/home/home.component';

import { NewGroupComponent } from './components/app/newgroup.component';

import { UserComponent } from './components/user/user.component';

/* auth0 */
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { AuthGuard } from './auth.guard';

/* services */
import { Auth } from './services/auth.service';
import { GroupsService } from './services/groups.service';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, NavComponent, HeaderComponent, WhyUsComponent, HowItWorksComponent, FeaturesComponent, TestemonialsComponent, HomeComponent, UserComponent, NewGroupComponent ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS, Auth, GroupsService, AuthGuard ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }