import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  changeQuantity = 0;
  constructor(cartServices:CartService){
    cartServices.getCartObservavle().subscribe((newcart)=>{
      this.changeQuantity = newcart.totalCount;
    })
  }
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
