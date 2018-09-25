import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TaktaanService } from '../taktaan.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.css']
})
export class DockerComponent implements OnInit {

  containers = [];

  constructor(private router: Router, private users: UsersService, private taktaan: TaktaanService) { 

  }

  setColorClass(status) {
    if (status === 'running') {
      return  'bg-success';
    } else {
      return 'bg-danger';
    }
  }

  getOperation(status) {
    if (status === 'running') {
      return  ' Stop';
    } else {
      return ' Start';
    }
  }

  ngOnInit() {
    if (!this.users.isAuthenticated()) {
      this.router.navigate([''])
    }
    this.taktaan.get_containers().subscribe(fetch => {
      for(let key in fetch) {
        let s = {};
        s['name'] = key;
        s['status'] = fetch[key]['status']
        s['id'] = fetch[key]['id']
        s['colorclass'] = this.setColorClass(s['status']);
        this.containers.push(s);
      }
    });

  }

  move_container(cid) {
    this.taktaan.move_container(cid).subscribe(fetch => {
      for (let x=0; x <= this.containers.length - 1; x++) {
        if (this.containers[x]['id'] === cid){
          console.log(fetch);
          this.containers[x]['status'] = fetch['status'];
          this.containers[x]['colorclass'] = this.setColorClass(this.containers[x]['status']);
        }
      }
    },
    error => {console.log(error);});
  }
}
