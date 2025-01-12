import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetFoodBtn } from './components/button/getfoodBtn/getfoodBtn.component';
import { OrderBtn } from './components/button/orderBtn/orderBtn.component';
import { FoodcardComponent } from './components/foodcard/foodcard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetFoodBtn,
    OrderBtn,
    FoodcardComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
