import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  results:any[]=[];

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  showResults(searchQuery:any){
    this.userService.getUserprofile(searchQuery).subscribe((response :any)=>{
      
    console.log([response])
    this.results=[response]
    }
    )
  }

}
