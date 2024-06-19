import { Component } from "@angular/core"; //angular.core tem quase tudo do angular, principais funcionalidades

//decorator  -- informações dentro dele: metadados
@Component({
    selector: 'app-school', //seletor é único 
    templateUrl: './school.component.html',
    standalone: true
})

export class SchoolComponent{

    //exemplo de interpolação de string 
    schoolID = 10;
    schoolName = 'IFSP';
    schoolSituation = 'aberta';

    constructor(){
        this.schoolSituation = Math.random() > 0.5 ? 'aberta' : 'fechada';
    }

    getSchoolName(){
        return this.schoolName; 
    }

    getStatusColor(){
        return this.schoolSituation == 'aberta' ? 'green' : 'red'; 
    }



}