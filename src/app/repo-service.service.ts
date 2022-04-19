import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {

  constructor(private http:HttpClient) { }
  getrepoprofile(repo:string){
    return this.http.get(`https://api.github.com/users/kLeitich/repos`)
  }
}
