import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { SearchComponent } from './component/pages/search/search.component';
import { PageDetailComponent } from './component/pages/page-detail/page-detail.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { TitleComponent } from './component/pages/title/title.component';
import { PagenotfoundComponent } from './component/pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    PageDetailComponent,
    CartPageComponent,
    TitleComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
