import { Component } from '@angular/core';
import { PackagesItemComponent } from './packages-item/packages-item.component';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [PackagesItemComponent],
  templateUrl: './packages-list.component.html',
  styleUrl: './packages-list.component.css'
})
export class PackagesListComponent {

  packages = [];
}
