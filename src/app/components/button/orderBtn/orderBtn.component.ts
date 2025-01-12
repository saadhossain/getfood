import { Component, inject, Input } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orderBtn',
  templateUrl: './orderBtn.component.html',
  styles: [],
})
export class OrderBtn {
  @Input() btnTitle!: string;
  @Input() food!: Food;

  cartService: CartService = inject(CartService);
  handleOrder(food: Food) {
    this.cartService.addToCart(food);
  }
}
