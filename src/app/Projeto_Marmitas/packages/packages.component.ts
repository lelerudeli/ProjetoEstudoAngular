import { Component, OnDestroy } from '@angular/core';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { Package } from './packages-list/package.model';
import { CommonModule } from '@angular/common';
import { PackagesListService } from '../services/packages-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [PackagesListComponent, PackagesDetailsComponent, CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
  providers: [PackagesListService]
})
export class PackagesComponent implements OnDestroy{

  selectedPackage! : Package
  susbscription: Subscription = new Subscription(); 

  constructor(private packageService : PackagesListService){

  }

  ngOnInit(): void {
    this.susbscription = this.packageService.packageSelected.subscribe((selectedPackage: Package) => {
      this.selectedPackage = selectedPackage;
    })
  }

  ngOnDestroy(): void {
    this.susbscription.unsubscribe(); //memory leak, evita que a memória fique sobrecarregada
    
  }

}
