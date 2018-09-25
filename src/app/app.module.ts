import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Injector} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DockerComponent } from './docker/docker.component';
import { SectionsComponent } from './sections/sections.component';
import { GroupsComponent } from './groups/groups.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImagesComponent } from './images/images.component';


import { UsersService } from './users.service';
import { TaktaanService } from './taktaan.service';
import { BoonService } from './boon.service';
import { LogoutComponent } from './logout/logout.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'docker', component: DockerComponent },
  { path: 'groups', component: GroupsComponent},
  { path: 'groups/:group_name/projects', component: ProjectsComponent},
  { path: 'groups/:group_name/projects/:project_slug/sections', component: SectionsComponent},
  { path: 'groups/:group_name/projects/:project_slug/sections/:section_slug/images', component: ImagesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DockerComponent,
    SectionsComponent,
    GroupsComponent,
    ProjectsComponent,
    ImagesComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ 
    UsersService, 
    TaktaanService,
    BoonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
