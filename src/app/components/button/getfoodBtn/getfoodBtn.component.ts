import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getfoodBtn',
  templateUrl: './getfoodBtn.component.html',
  styles: [],
})
export class GetFoodBtn {
  @Input() btnTitle!: string;
}
