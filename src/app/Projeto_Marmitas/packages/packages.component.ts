import { Component } from '@angular/core';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [PackagesListComponent, PackagesDetailsComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

}
