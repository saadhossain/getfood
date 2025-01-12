import { Component, Input } from '@angular/core';
import { Food } from 'src/app/model/food.model';

@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styles: [],
})
export class FoodcardComponent {
  @Input() food!: Food;
}
