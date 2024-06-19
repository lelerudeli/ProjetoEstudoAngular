import { Component } from '@angular/core';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { Food } from '../shared/food.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodEditComponent, CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

  foodList: Food[]= [
    new Food('frango', 1),
    new Food('arroz', 2),
    new Food('molho', 3)
  ];

}
