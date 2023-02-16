import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Students_Abs } from 'src/app/mocks/Absents.mock';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-woman',
  templateUrl: './absent-woman.component.html',
  styleUrls: ['./absent-woman.component.css']
})
export class AbsentWomanComponent {
  StudentInClass:Students[]=CLASSROOM;

@Input() absentWoman!:Students;


addRemoveWoman(){
  
  // je verifie ce que je recois
   console.log("this absenWOman",this.absentWoman);
  //  je mets le nom dans une variable NameStudent
  let caracteristic_student_woman=this.absentWoman;
  console.log("caracteristic_student-woman",caracteristic_student_woman);
  //je vais chercher l'etudiant dans la liste de mon mock CLASSROOM
  const absent_Student=this.StudentInClass.find((student)=>student.id === caracteristic_student_woman.id);
   
  console.log("absent_Sudent",absent_Student);
   if(absent_Student){
    // je veux que l'etudient absent soit retirer de absent  en changant son statut isPresent en présent c'est a dire en  true
    absent_Student.isPresent=true;
    console.log("je suis plus absente mais présente");
   }
   
   console.log("button cliqué");
  
  }

}
