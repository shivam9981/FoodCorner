import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let foodObervavle:Observable<Food[]>
    activateRoute.params.subscribe((params)=>{
      if (params.searchItem) {
        foodObervavle = this.api.getAllFoodBySearchItem(params.searchItem)
      }
      else{
        foodObervavle = api.getAll();
        foodObervavle.subscribe((ServerFoods)=>{
          this.foods = ServerFoods;
        })
      }
    })
    
  }

  ngOnInit(): void {
   
  }
  
  
}
