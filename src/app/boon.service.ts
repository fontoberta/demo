import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class BoonService {

  constructor(private http: HttpClient,private users: UsersService) { }

  getGroupList() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer ' + this.users.getCurrentAccessToken()
      })
    };
    return this.http.get(environment.boon_url + 'groups/', httpOptions);
  }

  getProjectList(group) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer ' + this.users.getCurrentAccessToken()
      })
    };
    let url = environment.boon_url + 'groups/' + group + '/projects/';
    
    return this.http.get(url, httpOptions);
  }

  getSectionList(group, project) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer ' + this.users.getCurrentAccessToken()
      })
    };
    let url = environment.boon_url + 'groups/' + group + '/projects/' + project + '/sections/';
    
    return this.http.get(url, httpOptions);
  }

  getSectionImages(group, project, section) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer ' + this.users.getCurrentAccessToken()
      })
    };
    let url = environment.boon_url + 'groups/' + group + '/projects/' + project + '/sections/' + section + '/images/';
    
    return this.http.get(url, httpOptions);
  }


}
