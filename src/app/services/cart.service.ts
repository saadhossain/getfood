import { Injectable } from '@angular/core';
import { Food } from '../model/food.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Food[] = [];
  totalPrice: number = 0;

  calculateTotal() {
    this.totalPrice = this.cart.reduce(
      (total: number, food: Food) => total + food.price * food.quantity,
      0
    );
  }
  addToCart(food: Food) {
    const isExists = this.cart.find((prod) => prod.id === food.id);
    if (isExists) {
      console.log('Food already added to Cart.');
      return;
    }
    this.cart.push(food);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    //Update the Cart Calculation
    this.calculateTotal();
  }

  increaseQty(foodId: number) {
    const targetedFood = this.cart.find((f) => f.id === foodId);
    if (targetedFood && targetedFood.quantity < 5) {
      targetedFood.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      //Update the Cart Calculation
      this.calculateTotal();
    }
  }
  decreaseQty(foodId: number) {
    const targetedFood = this.cart.find((f) => f.id === foodId);
    if (targetedFood && targetedFood.quantity > 1) {
      targetedFood.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      //Update the Cart Calculation
      this.calculateTotal();
    }
  }

  removeFromCart(foodId: number) {
    const exceptTargetedFood = this.cart.filter((f) => f.id !== foodId);
    localStorage.setItem('cart', JSON.stringify(exceptTargetedFood));
    //Update the Cart/Set the Cart with exisitng
    this.cart = exceptTargetedFood;
    //Update the Cart Calculation
    this.calculateTotal();
  }
}
