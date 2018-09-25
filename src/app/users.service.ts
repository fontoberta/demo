import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

   authenticate(username:string, password:string):Observable<any> {
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('client_id', environment.boon_client_id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    return this.http.post(
      environment.boon_url + 'oauth/token/', 
      body.toString(),
      httpOptions);
   }

   isAuthenticated() {
     if (sessionStorage.getItem('user') != null) {
       return true;
     } else {
       return false;
     }
   }

   getCurrentAccessToken() {
    return JSON.parse(sessionStorage.getItem('user')).access;
   }

   getCurrentRefreshToken() {
    return JSON.parse(sessionStorage.getItem('user')).refresh;
   }
}
