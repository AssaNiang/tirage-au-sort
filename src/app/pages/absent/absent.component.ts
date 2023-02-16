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
 
//   addRemove(){
// if(this.absent){
//   console.log("ici");
//   const StudentID=this.StudentInClass.find((student)=>student.firstname===this.absent.firstname);

//     console.log("studentId",StudentID);
// }
    
  //  this.StudentInClass.splice(StudentID,1);
  //  console.log(this.StudentInClass);
    // }
//   addRemove(){

//     console.log('abs est this.absent',this.absent);
//   const StudentID=this.StudentInClass.indexOf(this.absent)
//  console.log("studentId",StudentID);
//  this.StudentInClass.splice(StudentID,1);
//  console.log(this.StudentInClass);
//   }
  // addRemove1(){
    
  //   const StudentID=this.StudentInClass.indexOf(this.absent)
  //  console.log("studentId",StudentID);
  //   const student_splice=this.StudentInClass.splice(StudentID,1);
  //  console.log(student_splice);
  //   }

}
