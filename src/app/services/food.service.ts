import { Injectable } from '@angular/core';
import { Food } from '../model/Food';
import { sample_food } from 'src/Data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_food;
  }

  getAllFoodBySearchItem(SearchItem:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(SearchItem.toLowerCase()));
  }

  getFoodId(foodId:string){
    return this.getAll().find(food => food.id === foodId)?? new Food();
  }
}
