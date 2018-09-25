import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { LoginComponent } from '../login/login.component';
import { DockerComponent } from '../docker/docker.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProjectsComponent } from './projects.component';
import { SectionsComponent } from '../sections/sections.component';
import { ImagesComponent } from '../images/images.component';
import { appRoutes } from '../app.module';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

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
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});