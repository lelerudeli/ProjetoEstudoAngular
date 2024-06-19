import { Component } from '@angular/core';
import { SchoolComponent } from '../school/school.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [SchoolComponent, FormsModule, CommonModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css'
})
export class SchoolsComponent {

  //exemplo de property binding 
  allowNewSchool = false; 

  //exemplo de event binding
  createdSchoolStatus = "Nenhuma escola criada";
  // ex 2
  schoolName = "Nome de teste da Escola";
  schoolCreated = false;
  schools = ['escola 1', 'escola 2']

  constructor(){

  }



  ngOnInit(): void{
    setTimeout(() => {
      this.allowNewSchool = true; 
    }, 3000);  // essa função muda o valor da variavel depois de 3 mil milisegundos, alterando de forma dinamica uma propriedade
  }

  //exemplo de event binding 
  createSchool(){
    this.schoolCreated = true;
    this.createdSchoolStatus = "Escola foi criada! E seu nome é: " + this.schoolName;
    this.schools.push(this.schoolName)
  }

  // ex 2
  updateSchoolName(event: Event){
    this.schoolName = (<HTMLInputElement>event.target).value;
  }

}
