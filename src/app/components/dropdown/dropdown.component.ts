import { Component } from '@angular/core';
import { Students_Abs, STUDENT_ABS } from 'src/app/mocks/Absents.mock';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  // StudentInClass: Students_Abs[] = STUDENT_ABS;
    StudentInClass: Students[] = CLASSROOM;


  selected = " selectionner une personne";
  update(e: any) {
    this.selected = e.target.value;
    // this.selected= e.target.value.Students.firstname;
  }
  addName() {
    //je recupere le prenom de la personne à ajouter aux abs
    const OneName = this.selected;
    console.log("la personne selectionée", OneName);
    // on va chercher l'etudient  dans la liste 
    const absStudent = this.StudentInClass.find((student) => student.firstname === OneName)
    console.log('abstudent',absStudent);
    if (absStudent) {
absStudent.isPresent= false;
    }
  }
  //   currentItem=this.OneName;
}
