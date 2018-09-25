import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { LogoutComponent } from './logout.component';
import { LoginComponent } from '../login/login.component';
import { DockerComponent } from '../docker/docker.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SectionsComponent } from '../sections/sections.component';
import { ImagesComponent } from '../images/images.component';
import { appRoutes } from '../app.module';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LogoutComponent,
        LoginComponent,
        DockerComponent,
        GroupsComponent,
        ProjectsComponent,
        SectionsComponent,
        ImagesComponent
        ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        FormsModule
      ],
      providers: [
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});