import { Component } from '@angular/core';
import { Students_Abs, STUDENT_ABS } from 'src/app/mocks/Absents.mock';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  StudentInClass:Students_Abs[]=STUDENT_ABS;
 
  selected =" selectionner une personne";
  update(e:any){
    this.selected=e.target.value;
    // this.selected= e.target.value.Students.firstname;
  }
  addName(){
    const OneName=this.selected;
    console.log("la personne selectionée",OneName);
  }
//   currentItem=this.OneName;
 }
