import { Component, Input  } from '@angular/core';
import { Package } from '../package.model';
import { PackagesListService } from '../../../services/packages-list.service';

@Component({
  selector: 'app-packages-item',
  standalone: true,
  imports: [],
  templateUrl: './packages-item.component.html',
  styleUrl: './packages-item.component.css'
})
export class PackagesItemComponent {

  @Input() package! : Package;

  constructor(
    private packageService: PackagesListService
  ){

  }

  onSelected(){
    this.packageService.packageSelected.emit(this.package);

  }

}
