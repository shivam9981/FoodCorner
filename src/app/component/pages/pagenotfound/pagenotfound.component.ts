import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent  implements OnInit{
  
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Page Not Found"

  @Input()
  resetLinktext = "Reset"

  @Input()
  resetLintRoute = "/"

  constructor(){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
