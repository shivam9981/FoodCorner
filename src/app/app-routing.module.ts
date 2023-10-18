import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { PageDetailComponent } from './component/pages/page-detail/page-detail.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'search/:searchItem', component:HomeComponent
  },
  {
    path: 'food/:id', component:PageDetailComponent
  },
  {
    path: 'cart-page', component:CartPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
