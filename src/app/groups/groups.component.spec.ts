import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { LoginComponent } from '../login/login.component';
import { DockerComponent } from '../docker/docker.component';
import { GroupsComponent } from './groups.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SectionsComponent } from '../sections/sections.component';
import { ImagesComponent } from '../images/images.component';
import { appRoutes } from '../app.module';

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          DockerComponent,
          LoginComponent,
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
        HttpClient,
        HttpHandler
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});