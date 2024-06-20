import { Component, Input } from '@angular/core';
import { Package } from '../packages-list/package.model';

@Component({
  selector: 'app-packages-details',
  standalone: true,
  imports: [],
  templateUrl: './packages-details.component.html',
  styleUrl: './packages-details.component.css'
})
export class PackagesDetailsComponent {

  @Input() packageSelected! : Package;
  
}
