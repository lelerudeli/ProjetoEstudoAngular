import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Projeto_Marmitas/header/header.component';
import { PackagesComponent } from './Projeto_Marmitas/packages/packages.component';
import { FoodListComponent } from './Projeto_Marmitas/food-list/food-list.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    PackagesComponent, 
    FoodListComponent, 
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
}
