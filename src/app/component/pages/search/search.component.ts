import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem ='';
  constructor(activateRoute:ActivatedRoute , private router:Router){
    activateRoute.params.subscribe((params)=>{
      if(params.searchItem){
        this.searchItem = params.searchItem;  
      }
    })
  }

  ngOnInit(): void {
      
  }
  search(term:string){
    if (term) {
      this.router.navigateByUrl('/search/'+term);
    }
  }
}
