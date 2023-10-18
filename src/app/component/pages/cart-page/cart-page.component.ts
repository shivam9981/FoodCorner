import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart
  constructor(private cartService:CartService){
    this.cartService.getCartObservavle().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
      
  }

  removeFormCart(cartItem:CartItem){
    this.cartService.RemoveCartItem(cartItem.food.id)
  }
  
  changeQuantity(cartItem:CartItem , quantityToString:string){

    const quantity = parseInt(quantityToString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }
}
