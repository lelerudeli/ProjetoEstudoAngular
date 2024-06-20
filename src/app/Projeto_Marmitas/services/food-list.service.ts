import { EventEmitter, Injectable } from '@angular/core';
import { Food } from '../shared/food.model';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {

  foodsChanged = new EventEmitter<Food[]>();

  private foodList: Food[]= [
    new Food('frango', 1),
    new Food('arroz', 2),
    new Food('molho', 3)
  ];

  constructor() { }

  getFoods(){
    return this.foodList.slice(); //esse slice ele não passa a food direto, ele passa uma cópia da food, mas isso impede de mostrar na tela
  }

  addFood(newFood: Food){
    this.foodList.push(newFood)
    this.foodsChanged.emit(this.foodList.slice()) // isso resolve o problema de não mostrar na tela
  }
}
