import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

import { filter} from 'rxjs/operators';

import { LoginComponent } from './login/login.component';
import { DockerComponent } from './docker/docker.component';

import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fontobertademo';
  sidebarselection: any;

  constructor (private router : Router, private activatedRoute : ActivatedRoute, private users: UsersService) {
    
    this.sidebarselection = {
      'docker': false,
      'images': false,
      'galleries': false
    }
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      let cmp = this.activatedRoute.root.firstChild.component.toString();
      cmp = cmp.substring(cmp.indexOf(' '), cmp.indexOf('(')).trim();
      switch(cmp) {
        case 'LoginComponent': {
          this.sidebarselection.docker = false;
          this.sidebarselection.images = false;
          this.sidebarselection.galleries = false;
          break;
        }
        case 'DockerComponent': {
          this.sidebarselection.docker = true;
          this.sidebarselection.images = false;
          this.sidebarselection.galleries = false;
          break;
        }
        case 'GroupsComponent': {
          this.sidebarselection.docker = false;
          this.sidebarselection.images = true;
          this.sidebarselection.galleries = false;
          break;
        }
        case 'GalleriesComponent': {
          this.sidebarselection.docker = false;
          this.sidebarselection.images = false;
          this.sidebarselection.galleries = true;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  isLogged() {
    if (sessionStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

}
