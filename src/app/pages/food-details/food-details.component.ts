import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styles: [],
})
export class FoodDetailsComponent implements OnInit {
  foodId: number | any;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  ngOnInit(): void {
    // this.foodId = this.activeRoute.snapshot.params['id'];
    // this.foodId = this.activeRoute.snapshot.paramMap.get('id');

    // the Standard method for retriving the params from the route

    this.activeRoute.params.subscribe((data) => {
      this.foodId = data['id'];
    });
    console.log(this.foodId);
  }
}
