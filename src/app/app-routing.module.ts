import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { FoodDetailsComponent } from './pages/food-details/food-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'GetFood - Get Delicios Food.',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart - GetFood',
  },
  {
    path: 'food/:id',
    component: FoodDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
