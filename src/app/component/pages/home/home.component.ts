import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/model/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private api:FoodService , activateRoute:ActivatedRoute ){
    activateRoute.params.subscribe((params)=>{
      if (params.searchItem) {
        this.foods = this.api.getAllFoodBySearchItem(params.searchItem)
      }
      else{
        this.foods = api.getAll();
      }
    })
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
}
