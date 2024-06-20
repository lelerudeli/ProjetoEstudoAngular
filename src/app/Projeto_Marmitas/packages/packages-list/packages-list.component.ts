import { Component } from '@angular/core';
import { PackagesItemComponent } from './packages-item/packages-item.component';
import { Package } from './package.model';
import { CommonModule } from '@angular/common';
import { PackagesListService } from '../../services/packages-list.service';

@Component({
  selector: 'app-packages-list',
  standalone: true,
  imports: [PackagesItemComponent, CommonModule],
  templateUrl: './packages-list.component.html',
  styleUrl: './packages-list.component.css'
})
export class PackagesListComponent {

  package?: Package[];

  constructor(
    private packageService: PackagesListService
  ){

  }

  ngOnInit(): void{
    this.package = this.packageService.getPackages();
  }
}
