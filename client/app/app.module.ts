import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

/* components */
import { NavComponent } from './components/home/nav.component';
import { HeaderComponent } from './components/home/header.component';
import { WhyUsComponent } from './components/home/why_us.component';
import { HowItWorksComponent } from './components/home/how_it_works.component';
import { FeaturesComponent } from './components/home/features.component';
import { TestemonialsComponent } from './components/home/testemonials.component';
import { HomeComponent } from './components/home/home.component';

import { DialoguesComponent } from './components/app/dashboard/dialogues.component';
import { DialogueComponent } from './components/app/dashboard/dialogue.component';
import { NewGroupComponent } from './components/app/newgroup.component';
import { GroupComponent } from './components/app/group.component';

import { UserComponent } from './components/user/user.component';

/* auth0 */
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { AuthGuard } from './auth.guard';

/* services */
import { Auth } from './services/auth.service';
import { GroupsService } from './services/groups.service';
import { DialoguesService } from './services/dialogues.service';
import { MembersService } from './services/members.service';

/* Models */
import { Group } from './models/group';
import { Dialogue } from './models/dialogue';
import { Member } from './models/member';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule, Ng2Bs3ModalModule ],
  declarations: [ AppComponent, NavComponent, HeaderComponent, WhyUsComponent, HowItWorksComponent, FeaturesComponent, TestemonialsComponent, HomeComponent, UserComponent, NewGroupComponent, GroupComponent, DialogueComponent, DialoguesComponent ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS, Auth, GroupsService, AuthGuard, DialoguesService, MembersService, Group ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }