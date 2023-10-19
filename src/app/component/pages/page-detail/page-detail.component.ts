import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/model/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  food!:Food;
  constructor(activateroute:ActivatedRoute , private api:FoodService , private cartService:CartService, private router:Router){
    activateroute.params.subscribe((params)=>{
      if (params.id) {
          api.getFoodId(params.id).subscribe((ServerFoods)=>{
            this.food = ServerFoods;
          })
        // this.food = api.getFoodId(params.id);
      }
    })
  }

  ngOnInit(): void {
      
  }

  //add to cart method
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
