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
 


}
