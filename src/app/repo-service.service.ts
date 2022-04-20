import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  username = "kleitich"
  constructor(private http:HttpClient) { }
  getrepoprofile(username:any){
    return this.http.get(`https://api.github.com/users/${username}/repos`)
  }
}
