import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { LoginComponent } from './login.component';
import { DockerComponent } from '../docker/docker.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SectionsComponent } from '../sections/sections.component';
import { ImagesComponent } from '../images/images.component';
import { appRoutes } from '../app.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});