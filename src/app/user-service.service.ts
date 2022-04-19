import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) {}
  getUserprofile(username:string){
    return this.http.get(`https://api.github.com/users/kleitich`)
  }
  
}
