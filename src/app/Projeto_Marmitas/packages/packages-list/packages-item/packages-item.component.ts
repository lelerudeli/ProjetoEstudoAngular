import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-packages-item',
  standalone: true,
  imports: [],
  templateUrl: './packages-item.component.html',
  styleUrl: './packages-item.component.css'
})
export class PackagesItemComponent {

  @Input() package! : Package;
  @Output() packageSelected = new EventEmitter<void>();

  onSelected(){
    this.packageSelected.emit
  }

}
