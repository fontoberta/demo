import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { BoonService } from '../boon.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups = [];

  constructor(private router: Router, private users: UsersService, private boon: BoonService) { }

  ngOnInit() {
    if (!this.users.isAuthenticated()) {
      this.router.navigate(['']);
    }
    this.boon.getGroupList().subscribe(data => {
        for (let group in data) {
          let s = {};
          s['id'] = data[group]['id'];
          s['name'] = data[group]['name'];
          this.groups.push(s)
        }
    });
  }
}
