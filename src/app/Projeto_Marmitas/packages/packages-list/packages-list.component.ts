import { Component } from '@angular/core';
import { PackagesItemComponent } from './packages-item/packages-item.component';
import { Package } from './package.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [PackagesItemComponent, CommonModule],
  templateUrl: './packages-list.component.html',
  styleUrl: './packages-list.component.css'
})
export class PackagesListComponent {

  packages: Package[] = [
    new Package('frango', 'filé de frango ao molho', 'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/frango-molho.jpg'),
    new Package('frango', 'filé de frango ao molho', 'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/frango-molho.jpg')

  ];
}
