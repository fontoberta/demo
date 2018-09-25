import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UsersService } from '../users.service';
import { BoonService } from '../boon.service';
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  group = '';
  project = '';
  section = '';
  images = [];

  constructor(private route: ActivatedRoute, private router: Router, private users: UsersService, private boon: BoonService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.group=params.group_name ;
      this.project=params.project_slug;
      this.section=params.section_slug;
  });
    if (!this.users.isAuthenticated()) {
      this.router.navigate([''])
    }
    this.boon.getSectionImages(this.group, this.project, this.section).subscribe(data => {
      for (let section in data) {
          let s = {};
          s['id'] = data[section]['id'];
          s['name'] = data[section]['name'];
          s['slug'] = data[section]['slug']; 
          s['image'] = data[section]['image'];
          this.images.push(s);         
      }
  });
  }

}
