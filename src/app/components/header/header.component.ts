import { Component, inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  cartService: CartService = inject(CartService);

  // Retrive the Saved cart from the localStorage and set it to the Cart array to the Service.
  ngOnInit(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartService.cart = JSON.parse(savedCart);
      this.cartService.calculateTotal();
    }
  }
}
