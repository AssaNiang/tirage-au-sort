import { Component } from '@angular/core';
import { CLASSROOM, Students } from 'src/app/mocks/Classroom.mock';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent {
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
   this.StudentInClass.splice(StudentID,1);
   console.log(this.StudentInClass);
    }

}
