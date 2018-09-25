import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UsersService } from './users.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaktaanService {

  containers = [];

  constructor(private http: HttpClient,private users: UsersService) { }

  get_containers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.users.getCurrentAccessToken()
      })
    };
    return this.http.get(environment.taktaan_url, httpOptions);
  }

  move_container(cid) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.users.getCurrentAccessToken()
      })
    };
    return this.http.post(environment.taktaan_url + cid + '/', {}, httpOptions); 
  }

}
