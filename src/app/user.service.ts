import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public doRegistration(user) {
    return this.http.post('http://localhost:9999/adduser', user, {responseType: 'text' as 'json'});
  }
}
