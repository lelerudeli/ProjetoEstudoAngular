import { Component, OnDestroy } from '@angular/core';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { Food } from '../shared/food.model';
import { CommonModule } from '@angular/common';
import { FoodListService } from '../services/food-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodEditComponent, CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
  providers: [FoodListService]
})
export class FoodListComponent implements OnDestroy{

  foodList!: Food[];

  subscription: Subscription = new Subscription();

  constructor(private foodListService: FoodListService){

  }

  ngOnInit(){
    this.foodList = this.foodListService.getFoods();
    this.foodListService.foodsChanged.subscribe((foods: Food[])=> 
    this.foodList = foods)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }
}
