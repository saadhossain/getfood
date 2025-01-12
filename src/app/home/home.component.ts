import { Component, OnInit } from '@angular/core';
import { foods } from 'src/assets/foods';
import { Food } from '../model/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  ngOnInit(): void {
    this.foods = foods;
  }
}
