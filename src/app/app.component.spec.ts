import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Router, ActivatedRoute, ChildrenOutletContexts } from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { DockerComponent } from './docker/docker.component';
import { GroupsComponent } from './groups/groups.component';
import { ProjectsComponent } from './projects/projects.component';
import { SectionsComponent } from './sections/sections.component';
import { ImagesComponent } from './images/images.component';
import { appRoutes } from './app.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
        HttpClient,
        HttpHandler
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'fontobertademo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fontobertademo');
  }));
  it(`should return isLogged False`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isLogged()).toEqual(false);
  }));
  it(`should return isLogged True`, async(() => {
    sessionStorage.setItem('user', 'notempty');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.isLogged()).toEqual(true);
    sessionStorage.removeItem('user');
  }));
 
});
