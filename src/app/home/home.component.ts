import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { foods } from 'src/assets/foods';
import { Food } from '../model/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchText: string | any;
  ngOnInit(): void {
    // this.foods;
    this.activeRoute.queryParams.subscribe((data) => {
      this.searchText = data['search'];

      // Perform the filtering feature
      if (this.searchText === undefined || this.searchText === '') {
        this.foods = foods;
      }
      this.foods = foods.filter((food) =>
        food.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
}
