import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UsersService } from '../users.service';
import { BoonService } from '../boon.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  group = '';
  project = '';
  sections = [];

  constructor(private route: ActivatedRoute, private router: Router, private users: UsersService, private boon: BoonService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group=params.group_name ;
      this.project=params.project_slug;
  });
    if (!this.users.isAuthenticated()) {
      this.router.navigate([''])
    }
    this.boon.getSectionList(this.group, this.project).subscribe(data => {
      for (let section in data) {
          let s = {};
          s['id'] = data[section]['id'];
          s['name'] = data[section]['name'];
          s['slug'] = data[section]['slug']; 
          s['is_gallery'] = data[section]['is_gallery']; 
          this.sections.push(s);         
      }
  });
  }

}
