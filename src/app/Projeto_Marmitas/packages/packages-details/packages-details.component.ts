import { Component, Input } from '@angular/core';
import { Package } from '../packages-list/package.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages-details',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './packages-details.component.html',
  styleUrl: './packages-details.component.css'
})
export class PackagesDetailsComponent {

  @Input() packageSelected! : Package;
  
}
