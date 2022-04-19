import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { RepoServiceService } from '../repo-service.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  results:any[]=[];
  repositories:any[]=[];

  constructor(private userService:UserServiceService,private reposervice:RepoServiceService) { }

  ngOnInit(): void {
  }
  showResults(searchQuery:any){
    this.userService.getUserprofile(searchQuery).subscribe((response :any)=>{
    this.results=[response]
    }
    )
  };
  showRepo(searchRepo:any){
    this.reposervice.getrepoprofile(searchRepo).subscribe((response :any)=>{
    this.repositories=[response]
    console.log([response])
    }
    )
  };

}
