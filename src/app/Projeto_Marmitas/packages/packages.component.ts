import { Component } from '@angular/core';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { Package } from './packages-list/package.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [PackagesListComponent, PackagesDetailsComponent, CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {

  selectedPackage! : Package

}
