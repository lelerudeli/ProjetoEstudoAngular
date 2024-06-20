import { EventEmitter, Injectable } from '@angular/core';
import { Package } from '../packages/packages-list/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackagesListService {

  packageSelected = new EventEmitter<Package>();

  constructor() { }

   private packages: Package[] = [
    new Package('frango', 'filé de frango ao molho', 'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/frango-molho.jpg'),
    new Package('salmão', 'salmão ao molho', 'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/frango-molho.jpg')
  ];

  getPackages(){
    return this.packages.slice()
  }
}
