import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../model/Food';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  
  constructor() { }


  // add to cart 

  addToCart(food:Food):void{
    let cardItem = this.cart.items.find(item => item.food.id === food.id)
    if(cardItem){
      return
    }

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage()
  }

  //Remove cart item

  RemoveCartItem(foodId:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.setCartToLocalStorage()
  }

  //change Quantity

  changeQuantity(foodId:string ,quantity:number){
    let CartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!CartItem) {
      return
    }
    CartItem.quantity = quantity;
    CartItem.price = quantity * CartItem.price;
    this.setCartToLocalStorage()
  }

  // clear card data
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage()
  }

  //get cart observavle mean check observavle data

  getCartObservavle():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  //now set localstorage data

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((PreviousSum, CurrentItem)=> 
    PreviousSum+CurrentItem.price,0);

    this.cart.totalCount = this.cart.items.reduce((PreviousSum, CurrentItem)=>
    PreviousSum+CurrentItem.quantity,0);
  
    const cartjson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartjson);
    this.cartSubject.next(this.cart);
  }

  // get cart data form localStorage

  private getCartFromLocalStorage():Cart{
    const cartjson =  localStorage.getItem('Cart');
    return cartjson?JSON.parse(cartjson): new Cart()
  }
}
