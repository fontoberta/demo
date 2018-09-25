import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { LoginComponent } from '../login/login.component';
import { DockerComponent } from './docker.component';
import { GroupsComponent } from '../groups/groups.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SectionsComponent } from '../sections/sections.component';
import { ImagesComponent } from '../images/images.component';
import { appRoutes } from '../app.module';

describe('DockerComponent', () => {
  let component: DockerComponent;
  let fixture: ComponentFixture<DockerComponent>;

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
    fixture = TestBed.createComponent(DockerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should setColorClass for Container divs`, async(() => {
    const fixture = TestBed.createComponent(DockerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.setColorClass('running') ).toEqual('bg-success');
    expect(app.setColorClass('exited') ).toEqual('bg-danger');
  }));
  it(`should getOperation to apply`, async(() => {
    const fixture = TestBed.createComponent(DockerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getOperation('running') ).toEqual(' Stop');
    expect(app.getOperation('exited') ).toEqual(' Start');
  }));
});