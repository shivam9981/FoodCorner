import { Injectable } from '@angular/core';
import { Food } from '../model/Food';
// import { sample_food } from 'src/Data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOOD_URL, SEARCH_FOOD_URL, SEARCH_FOOD_URL_ID } from '../URLS/Url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private HttpClient:HttpClient) { }
  getAll():Observable<Food[]>{
    return this.HttpClient.get<Food[]>(FOOD_URL);
  }

  getAllFoodBySearchItem(SearchItem:string){
    return this.HttpClient.get<Food[]>(SEARCH_FOOD_URL+ SearchItem);
  }

  getFoodId(foodId:string){
    return this.HttpClient.get<Food>(SEARCH_FOOD_URL_ID + foodId);
  }
}
