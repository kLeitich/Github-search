import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { RepoServiceService } from '../repo-service.service';
import { Repo } from '../repo';
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  results:any[]=[];
  
  repo:Repo[]=[];
  username:any[]=[];

  constructor(private userService:UserServiceService,private reposervice:RepoServiceService) { }

  ngOnInit(): void {
  }
  showResults(username:any){
    this.userService.getUserprofile(username).subscribe((response :any)=>{
    this.results=[response]
    
    }
    )
  };
  showRepo(username:any){
    this.reposervice.getrepoprofile(username).subscribe((response :any)=>{
    this.repo=response
    
    }
    )
  };
  

}
