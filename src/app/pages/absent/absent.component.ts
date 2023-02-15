import { Component } from '@angular/core';
//import { Students_Abs, STUDENT_ABS } from 'src/app/mocks/Absents.mock';

import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {
  //  StudentInClass:Students_Abs[]=STUDENT_ABS;
   StudentInClass:Students[]=CLASSROOM;

  absent!:Students;
  addRemove(){

  const StudentID=this.StudentInClass.indexOf(this.absent)
 console.log("studentId",StudentID);
 this.StudentInClass.splice(StudentID,1);
 console.log(this.StudentInClass);
  }
  addRemove1(){
    
    const StudentID=this.StudentInClass.indexOf(this.absent)
   console.log("studentId",StudentID);
    const assa=this.StudentInClass.splice(StudentID,1);
   console.log(assa);
    }

}
