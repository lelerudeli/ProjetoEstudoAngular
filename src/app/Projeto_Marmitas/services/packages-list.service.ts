import { EventEmitter, Injectable } from '@angular/core';
import { Package } from '../packages/packages-list/package.model';
import { Food } from '../shared/food.model';

@Injectable({
  providedIn: 'root'
})
export class PackagesListService {

  packageSelected = new EventEmitter<Package>();

  constructor() { }

   private packages: Package[] = [
    new Package(
      'frango', 
      'filé de frango ao molho',
      'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/frango-molho.jpg',
       [
        new Food('frango', 2),
        new Food('molho', 1)
       ]),
    new Package('salmão', 
      'salmão ao molho', 
      'https://bing.com/th?id=OSK.93bef1ebf23b8b0f27e581b30e80b6a1',
      [
        new Food('salmão', 2),
        new Food('molho', 1)
      ])
  ];

  getPackages(){
    return this.packages.slice()
  }
}
