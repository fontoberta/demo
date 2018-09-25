import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UsersService } from '../users.service';
import { BoonService } from '../boon.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  group = '';
  projects = [];

  constructor(private route: ActivatedRoute, private router: Router, private users: UsersService, private boon: BoonService) {
    
   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group=params.group_name ;
  });
    if (!this.users.isAuthenticated()) {
      this.router.navigate([''])
    }
    this.boon.getProjectList(this.group).subscribe(data => {
      for (let project in data) {
          let s = {};
          s['id'] = data[project]['id'];
          s['name'] = data[project]['name'];
          s['slug'] = data[project]['slug']; 
          this.projects.push(s);         
      }
  });
  }

}
