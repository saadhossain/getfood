import { Component, inject, Input } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [],
})
export class CartItemComponent {
  @Input() food!: Food;
  cartService: CartService = inject(CartService);
}
