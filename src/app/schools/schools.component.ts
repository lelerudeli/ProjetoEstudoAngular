import { Component } from '@angular/core';
import { SchoolComponent } from '../school/school.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [SchoolComponent, FormsModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {

  //exemplo de property binding 
  aceitaNovaEscola = false; 

  //exemplo de event binding
  createdSchoolStatus = "Nenhuma escola criada";
  // ex 2
  schoolName = '';


  ngOnInit(): void{
    setTimeout(() => {
      this.aceitaNovaEscola = true; 
    }, 3000);  // essa função muda o valor da variavel depois de 3 mil milisegundos, alterando de forma dinamica uma propriedade
  }

  //exemplo de event binding 
  createSchool(){
    this.createdSchoolStatus = "Escola foi criada"
  }

  // ex 2
  updateSchoolName(event: Event){
    this.schoolName = (<HTMLInputElement>event.target).value;
  }

}
