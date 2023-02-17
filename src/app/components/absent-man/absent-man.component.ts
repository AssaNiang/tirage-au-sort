import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent-man',
  templateUrl: './absent-man.component.html',
  styleUrls: ['./absent-man.component.css']
})
export class AbsentManComponent {
  StudentInClass: Students[] = CLASSROOM;
  // je reçois la valeur du parent absent
  @Input() absentMan!: Students;
  
  addRemove() {
    // je verifie ce que je recois
    console.log("this absentMan", this.absentMan);
    //  je mets le nom dans une variable caracteristic_student
    let caracteristics_student = this.absentMan;
    console.log("caracteristic_student", caracteristics_student);
    //je vais chercher l'etudiant dans la liste de mon mock CLASSROOM
    const absent_Student = this.StudentInClass.find((student) => student.id === caracteristics_student.id);
    
    console.log("absent_Sudent", absent_Student);
    if (absent_Student) {
      // je veux que l'etudient absent soit retirer de absent  en changant son statut isPresent en présent c'est a dire en true
      absent_Student.isPresent = true;
      console.log("je suis plus absent mais présent");
    }
    
    console.log("button cliqué");
    
  }
  
}
