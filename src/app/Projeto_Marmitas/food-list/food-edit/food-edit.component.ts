import { Component, ElementRef, ViewChild } from '@angular/core';
import { Food } from '../../shared/food.model';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-edit',
  standalone: true,
  imports: [],
  templateUrl: './food-edit.component.html',
  styleUrl: './food-edit.component.css'
})
export class FoodEditComponent {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor(private foodListService: FoodListService){

  }

  addFood(){
    const foodName = this.nameInputRef.nativeElement.value;
    const foodAmount = this.amountInputRef.nativeElement.value;

    const newFood = new Food(foodName, foodAmount);

    this.foodListService.addFood(newFood);

  }

}
